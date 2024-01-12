import { SystemMessage } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { addToast } from '@app/components/toast/toast.service';
import AuthService from '@app/services/http/auth.service';
import { storeUser } from '@app/store/auth/auth.action';
import { ConfirmResponse, LoginInitialValues, LoginResponse } from '@app/types';
import { FieldType } from '@app/types/helper';
import { loginValidationSchema } from '@app/validations';
import useObservable from '@core/hooks/use-observable.hook';
import StorageService from '@core/services/storage/storage.service';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import backgroundRegister from '../../../assets/images/background/backgroundLogin.png';
import logoLogin from '../../../assets/images/logo/logoLogin.png';
import { INITIAL_VALUES, localStorageKeys, PATHS as path } from '../../common/constants/common.const';

export const Login = () => {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<LoginInitialValues>>();
  const { subscribeOnce } = useObservable();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  useEffect(() => {
    token &&
      subscribeOnce(AuthService.confirm(token), (confirmRes: ConfirmResponse) => {
        console.log(confirmRes.status);
        confirmRes.status && addToast({ text: SystemMessage.VERIFY_SUCCESS, position: 'top-right' });
      });
  }, [token]);
  const handleSubmit = ({ email, password }: LoginInitialValues) => {
    subscribeOnce(AuthService.login(email, password), (LoginRes: LoginResponse) => {
      if (LoginRes.success) {
        const { accessToken } = LoginRes.data;
        StorageService.set(localStorageKeys.USER_TOKEN, accessToken);
        dispatch(storeUser(LoginRes));
        navigate(path.HOMEPAGE);
      }
    });
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen "
      style={{ backgroundImage: `url(${backgroundRegister})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
        <div className="flex-1 ml-8">
          <img src={logoLogin} alt="Your Image" className="object-cover rounded w-200 h-200" aria-hidden="true" />
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
              {formFields.login.map((field) => (
                <FormControl name={field.name}>
                  <Input
                    width="auto"
                    className="w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                    placeholder={field.placeholder}
                    inputClassName="w-full"
                    errorClassName="text-red-500 text-xs"
                    type={field.type as FieldType}
                  />
                </FormControl>
              ))}

              <div>
                <Button
                  type="submit"
                  label={t('login.submitButton')}
                  width="w-full"
                  size="m"
                  className="rounded-[10px]"
                />
                <small>{t('login.or')}</small>
                <div className="mt-2 text-sm text-blue-500 text-center">
                  <Link to={path.REGISTER} className="bg-blue-gray-500 text-white px-4 py-2 rounded-full">
                    {t('login.signUpButton')}
                  </Link>
                </div>
                <small className="pt-5">{t('login.maybe')}</small>
                <div className="mt-2 text-sm text-orange-400 text-center">
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
