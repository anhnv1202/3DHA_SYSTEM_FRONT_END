import { INITIAL_VALUES, PATHS, SystemMessage, localStorageKeys } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { addToast } from '@app/components/toast/toast.service';
import UserService from '@app/services/http/user.service';
import { ChangePasswordProfileInitialValues, User } from '@app/types';
import { FieldType } from '@app/types/helper';
import { changePasswordProfileValidationSchema } from '@app/validations/user.validation';
import backgroundUser from '@assets/images/background/backgroundUser.png';
import { jwtIsValid } from '@core/helpers/jwt.helper';
import useObservable from '@core/hooks/use-observable.hook';
import StorageService from '@core/services/storage';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function ChangePasswordProfile() {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<ChangePasswordProfileInitialValues>>();
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const { subscribeOnce } = useObservable();
  const storedUserInfo = StorageService.getObject(localStorageKeys.USER_INFO) as User;

  useEffect(() => {
    const token = StorageService.get(localStorageKeys.USER_TOKEN);
    if (token && jwtIsValid(token)) {
      setIsMounted(true);
    } else {
      navigate(PATHS.HOMEPAGE);
    }
  }, [formRef, storedUserInfo, navigate]);

  const handleSubmit = (values: ChangePasswordProfileInitialValues) => {
    const token = StorageService.get(localStorageKeys.USER_TOKEN);
    if (token && jwtIsValid(token)) {
      subscribeOnce(
        UserService.changePassword({
          ...values,
        }),
        (res) => {
          addToast({ text: SystemMessage.CHANGE_PASSWORD_SUCCESS, position: 'top-right' });
          res && navigate(PATHS.LOGIN);
        },
      );
    }
  };

  return (
    isMounted && (
      <div
        className="flex items-center justify-center min-h-screen"
        style={{ backgroundImage: `url(${backgroundUser})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="w-1/3 flex items-center rounded-[10px] bg-white shadow-6 ">
          <div className="w-full flex-1 text-center rounded-gray-300 p-4 ">
            <h2 className="text-[50px] font-bold text-center">{t('user-info.change-password')}</h2>
            <Formik
              displayName="EditProfileForm"
              initialValues={INITIAL_VALUES.CHANGE_PASSWORD_PROFILE}
              onSubmit={handleSubmit}
              innerRef={formRef}
              validationSchema={changePasswordProfileValidationSchema}
              validateOnChange
              validateOnBlur
            >
              <Form className="max-w-xl mx-auto p-8 rounded-[10px]">
                {formFields.change_password_profile.map((field, index) => (
                  <FormControl key={index} name={field.name}>
                    <Input
                      width="auto"
                      className="!max-w-none w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto text-xl"
                      placeholder={t(field.placeholder)}
                      inputClassName="w-full"
                      errorClassName="text-red-500 text-xs"
                      type={field.type as FieldType}
                    />
                  </FormControl>
                ))}
                <div className="mt-10">
                  <Button
                    type="submit"
                    label={t('user-info.changePassword')}
                    width="w-full"
                    size="m"
                    className=" text-lg rounded-[10px] bg-blue-gray-500 text-white hover:bg-blue-gray-700"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    )
  );
}

export default ChangePasswordProfile;
