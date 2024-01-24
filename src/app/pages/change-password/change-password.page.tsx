import { INITIAL_VALUES, PATHS, SystemMessage } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { addToast } from '@app/components/toast/toast.service';
import AuthService from '@app/services/http/auth.service';
import { ChangePasswordInitialValues } from '@app/types';
import { FieldType } from '@app/types/helper';
import { changePasswordValidationSchema } from '@app/validations';
import backgroundRegister from '@assets/images/background/backgroundRegister.png';
import avatarChangePass from '@assets/images/logo/avatarChangePass.png';
import useObservable from '@core/hooks/use-observable.hook';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

function ChangePassword() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<ChangePasswordInitialValues>>();
  const { subscribeOnce } = useObservable();
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const handleSubmit = (values: ChangePasswordInitialValues) => {
    token &&
      subscribeOnce(AuthService.changePassword({ ...values, token }), (res) => {
        addToast({ text: SystemMessage.CHANGE_PASSWORD_SUCCESS, position: 'top-right' });
        res && navigate(PATHS.LOGIN);
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundRegister})` }}
    >
      <div className="w-1/2 flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
        <div className="flex-1 text-center rounded border-gray-300 p-4 ">
          <h2 className="text-[40px] mb-5 font-bold text-center">{t('changePassword.changePassword')}</h2>
          <Formik
            displayName="SignUpForm"
            initialValues={INITIAL_VALUES.CHANGE_PASSWORD}
            onSubmit={handleSubmit}
            innerRef={formRef}
            validationSchema={changePasswordValidationSchema}
            validateOnChange
            validateOnBlur
          >
            <Form className="max-w-lg mx-auto p-8 border shadow-6 rounded-[10px]">
              {formFields.changePassword.map((field) => (
                <FormControl key={field.name} name={field.name}>
                  <Input
                    width="auto"
                    className="!max-w-none w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                    placeholder={t(field.placeholder)}
                    inputClassName="w-full"
                    errorClassName="text-red-500 text-xs"
                    type={field.type as FieldType}
                  />
                </FormControl>
              ))}
              <div>
                <Button
                  type="submit"
                  label={t('changePassword.changePassword')}
                  width="w-full"
                  size="m"
                  className="rounded-[10px]"
                />
                <small>{t('changePassword.or')}</small>
                <div className="mt-2 text-sm text-blue-500 text-center">
                  <Link to={PATHS.LOGIN} className="bg-blue-gray-500 text-white px-4 py-2 rounded-full">
                    {t('changePassword.login')}
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex-1 ml-8">
          <img
            src={avatarChangePass}
            alt="Your Image"
            className="w-200 h-200 object-cover rounded"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
