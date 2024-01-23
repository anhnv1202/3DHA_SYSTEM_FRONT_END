import { INITIAL_VALUES, PATHS } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import WarningModal from '@app/components/warning-modal';
import AuthService from '@app/services/http/auth.service';
import { openPortalDialog } from '@app/services/modal.service';
import { RegisterResponse, SignUpInitialValues } from '@app/types';
import { FieldType } from '@app/types/helper';
import { signUpValidationSchema } from '@app/validations';
import backgroundRegister from '@assets/images/background/backgroundRegister.png';
import avatarRegister from '@assets/images/logo/avatarRegister.png';
import useObservable from '@core/hooks/use-observable.hook';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Register() {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<SignUpInitialValues>>();
  const { subscribeOnce } = useObservable();

  const handleSubmit = (values: SignUpInitialValues) => {
    subscribeOnce(AuthService.register({ ...values }), (res: RegisterResponse) => {
      if (res.status) {
        openPortalDialog(WarningModal, {
          message: 'register.confirmEmail',
        });
      }
    });
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundRegister})` }}
    >
      <div className="w-1/2 flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
        <div className="flex-1 ml-12">
          <img
            src={avatarRegister}
            alt="Register logo"
            className="w-200 h-200 object-cover rounded"
            aria-hidden="true"
          />
        </div>
        <div className="w-1/2 flex-1 text-center rounded border-gray-300 p-4 ">
          <h2 className="text-[50px] font-bold text-center">{t('register.register')}</h2>
          <Formik
            displayName="SignUpForm"
            initialValues={INITIAL_VALUES.REGISTER}
            onSubmit={handleSubmit}
            innerRef={formRef}
            validationSchema={signUpValidationSchema}
            validateOnChange
            validateOnBlur
          >
            <Form className="max-w-lg mx-auto p-8 border shadow-6 rounded-[10px]">
              <div className="flex">
                {formFields.register1.map((field, index) => (
                  <FormControl key={index} name={field.name}>
                    <Input
                      width="auto"
                      className=" w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                      placeholder={t(field.placeholder)}
                      inputClassName="w-full"
                      errorClassName="text-red-500 text-xs"
                      type={field.type as FieldType}
                    />
                  </FormControl>
                ))}
              </div>
              {formFields.register2.map((field, index) => (
                <FormControl key={index} name={field.name}>
                  <Input
                    width="auto"
                    className=" !max-w-none w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                    placeholder={t(field.placeholder)}
                    inputClassName="w-full"
                    errorClassName="text-red-500 text-xs"
                    type={field.type as FieldType}
                  />
                </FormControl>
              ))}
              <div>
                <Button type="submit" label={t('register.signup')} width="w-full" size="m" className="rounded-[10px]" />
                <small>{t('register.or')}</small>
                <div className="mt-2 text-sm text-blue-500 text-center">
                  <Link to={PATHS.LOGIN} className="bg-blue-gray-500 text-white px-4 py-2 rounded-full">
                    {t('register.account')}
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Register;
