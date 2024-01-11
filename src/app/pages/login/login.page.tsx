import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { LoginInitialValues } from '@app/types';
import { loginValidationSchema } from '@app/validations';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import backgroundRegister from '../../../assets/images/background/backgroundLogin.png';
import page400 from '../../../assets/images/logo/page400.jpg';
import { INITIAL_VALUES, PATHS as path } from '../../common/constants/common.const';
import { formFields } from '@app/common/constants/const';
import { FieldType } from '@app/types/helper';
export const Login = () => {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<LoginInitialValues>>();
  useEffect(() => {
    if (formRef.current) {
      // const formValues = formRef.current.values;
      // formRef.current.setFieldValue('username', 'Va deeptroy');
      // console.log('Form Values:', formValues);
    }
  }, [formRef]);
  const handleSubmit = (values: LoginInitialValues) => {
    // subscribeOnce(AuthService.login(values.username, values.password), (LoginRes: LoginResponse) => {
    //   if (LoginRes.role === ROLE.STUDENT) {
    //     StorageService.set(ACCESS_TOKEN_KEY, LoginRes.jwt);
    //     StorageService.setObject(USER_INFO_KEY, {
    //       _id: LoginRes._id,
    //       username: LoginRes.username,
    //     });
    //     dispatch(storeUser(LoginRes));
    //   }
    // });
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen "
      style={{ backgroundImage: `url(${backgroundRegister})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className=" flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
        <div className="flex-1 ml-8">
          <img src={page400} alt="Your Image" className="w-100 h-100 object-cover rounded" aria-hidden="true" />
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
