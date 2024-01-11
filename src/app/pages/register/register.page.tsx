import { INITIAL_VALUES } from '@app/common/constants';
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
import { createRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Register() {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<SignUpInitialValues>>();
  const dispatch = useDispatch();
  const { subscribeOnce } = useObservable();
  useEffect(() => {
    if (formRef.current) {
      // const formValues = formRef.current.values;
      // formRef.current.setFieldValue('username', 'Va deeptroy');
      // console.log('Form Values:', formValues);
    }
  }, [formRef]);
  const handleSubmit = (values: SignUpInitialValues) => {
    subscribeOnce(AuthService.register({ ...values }), (RegisterRes: RegisterResponse) => {
      console.log(RegisterRes);
      if (RegisterRes.status) {
        openPortalDialog(WarningModal, {
          message: 'register.confirmEmail',
        });
      }
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundRegister})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className=" flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
        <div className="flex-1 ml-8">
          <img src={avatarRegister} alt="Your Image" className="w-100 h-100 object-cover rounded" />
        </div>
        <div className="flex-1 text-center rounded border-gray-300 p-4 ">
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
              {formFields.register.map((field, index) => (
                <FormControl key={index} name={field.name}>
                  <Input
                    width="auto"
                    className="w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
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
                  <Link
                    to={'/'}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-gray-500 text-white px-4 py-2 rounded-full"
                  >
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
