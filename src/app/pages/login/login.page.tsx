import { SystemMessage } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { addToast } from '@app/components/toast/toast.service';
import AuthService from '@app/services/http/auth.service';
import { storeUser } from '@app/store/auth/auth.action';
import { AuthContextType, ConfirmResponse, LoginInitialValues, LoginResponse } from '@app/types';
import { FieldType } from '@app/types/helper';
import { loginValidationSchema } from '@app/validations';
import { useAuth } from '@core/context/auth.context';
import useObservable from '@core/hooks/use-observable.hook';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import backgroundRegister from '../../../assets/images/background/backgroundLogin.png';
import logoLogin from '../../../assets/images/logo/logoLogin.png';
import { INITIAL_VALUES, PATHS as path } from '../../common/constants/common.const';

export const Login = () => {
  const { t } = useTranslation();
  const { startSession } = useAuth() as AuthContextType;
  const formRef = createRef<FormikContextType<LoginInitialValues>>();
  const { subscribeOnce } = useObservable();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  useEffect(() => {
    token &&
      subscribeOnce(AuthService.confirm(token), (res: ConfirmResponse) => {
        res && addToast({ text: SystemMessage.VERIFY_SUCCESS, position: 'top-right' });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const handleSubmit = ({ email, password }: LoginInitialValues) => {
    subscribeOnce(AuthService.login(email, password), (res: LoginResponse) => {
      if (res) {
        const { accessToken, user } = res;
        addToast({ text: SystemMessage.VERIFY_SUCCESS, position: 'top-right' });
        startSession({ accessToken, user });
        dispatch(storeUser(res));
        navigate(path.HOMEPAGE);
      }
    });
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundRegister})` }}
    >
      <div className="w-1/2 flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
        <div className="flex-1 ml-8">
          <img src={logoLogin} alt="Login logo" className="object-cover rounded w-200 h-200" aria-hidden="true" />
        </div>
        <div className="flex-1 text-center rounded border-gray-300 p-4 ">
          <h2 className="text-[50px] font-bold text-center">{t('login.title')}</h2>
          <Formik
            displayName="SignInForm"
            initialValues={INITIAL_VALUES.LOGIN}
            onSubmit={handleSubmit}
            innerRef={formRef}
            validationSchema={loginValidationSchema}
            validateOnChange
            validateOnBlur
          >
            <Form className="max-w-lg mx-auto p-8 border shadow-6 rounded-[10px]">
              {formFields.login.map((field, index) => (
                <FormControl key={index} name={field.name}>
                  <Input
                    width="auto"
                    className="!max-w-none w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                    placeholder={field.placeholder}
                    inputClassName="w-full"
                    errorClassName="text-red-500 text-xs"
                    type={field.type as FieldType}
                  />
                </FormControl>
              ))}

              <div>
                <div>
                  <div>
                    <Button
                      type="submit"
                      label={t('login.submitButton')}
                      width="w-full"
                      size="m"
                      className="rounded-[10px]"
                    />
                  </div>
                  <div className="mt-2 mb-5">
                    <Button
                      type="submit"
                      label=""
                      width="w-full"
                      size="m"
                      theme="normal"
                      className="rounded-[10px] flex items-center justify-center space-x-2 px-4 py-2 bg-blue-gray-500 text-white hover:bg-blue-gray-800 focus:outline-none focus:ring focus:border-green-300"
                    >
                      <FcGoogle className="text-4xl" />
                      <h2 className="pl-2"> {t('login.google')}</h2>
                    </Button>
                  </div>
                </div>
                <small className="text-xl pt-2">{t('login.or')}</small>
                <div className="mb-7 mt-2 text-xl text-blue-500 text-center">
                  <Link to={path.REGISTER} className="bg-light-green-500 text-white px-4 py-2 rounded-full">
                    {t('login.signUpButton')}
                  </Link>
                </div>
                <small className="pt-5 text-xl">{t('login.maybe')}</small>
                <div className="mb-3 mt-2 text-xl text-orange-400 text-center">
                  <Link to={path.FORGOT_PASSWORD} className="bg-orange-400 text-black px-4 py-2 rounded-full">
                    {t('login.forgotPasswordButton')}
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
