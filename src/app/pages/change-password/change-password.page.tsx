import { INITIAL_VALUES, SystemMessage } from '@app/common/constants';
import { formFieldsChangePassword } from '@app/common/constants/const';
import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { addToast } from '@app/components/toast/toast.service';
import WarningModal from '@app/components/warning-modal';
import { openPortalDialog } from '@app/services/modal.service';
import { ChangePasswordInitialValues } from '@app/types';
import { changePasswordValidationSchema } from '@app/validations';
import backgroundRegister from '@assets/images/background/backgroundRegister.png';
import avatarChangePass from '@assets/images/logo/avatarChangePass.png';
import useObservable from '@core/hooks/use-observable.hook';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ChangePassword() {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<ChangePasswordInitialValues>>();
  const dispatch = useDispatch();
  const { subscribeOnce } = useObservable();
  useEffect(() => {
    if (formRef.current) {
      // const formValues = formRef.current.values;
      // formRef.current.setFieldValue('username', 'Va deeptroy');
      // console.log('Form Values:', formValues);
    }
  }, [formRef]);
  const handleSubmit = (values: ChangePasswordInitialValues) => {
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
  const handleValidAccount = () => {
    const exam = openPortalDialog(WarningModal, {
      message: 'changePassword.changePass',
    });
    exam.afterClosed().subscribe((data: { isAccept: boolean }) => {
      data?.isAccept && addToast({ text: SystemMessage.UNKNOWN_ERROR, position: 'top-right' });
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundRegister})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className=" flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
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
              {formFieldsChangePassword.map((field) => (
                <FormControl key={field.name} name={field.name}>
                  <Input
                    width="auto"
                    className="w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                    placeholder={t(field.placeholder)}
                    inputClassName="w-full"
                    errorClassName="text-red-500 text-xs"
                    type={field.type as 'number' | 'text' | 'password' | 'date' | undefined}
                  />
                </FormControl>
              ))}
              <div>
                <Button
                  onClick={handleValidAccount}
                  label={t('changePassword.changePassword')}
                  width="w-full"
                  size="m"
                  className="rounded-[10px]"
                />
                <small>{t('changePassword.or')}</small>
                <div className="mt-2 text-sm text-blue-500 text-center">
                  <Link
                    to={'/login'}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-gray-500 text-white px-4 py-2 rounded-full"
                  >
                    {t('changePassword.login')}
                  </Link>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="flex-1 ml-8">
          <img src={avatarChangePass} alt="Your Image" className="w-100 h-100 object-cover rounded" />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
