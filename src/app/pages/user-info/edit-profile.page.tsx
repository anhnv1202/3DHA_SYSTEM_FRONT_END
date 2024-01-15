import { INITIAL_VALUES, localStorageKeys } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { FieldType } from '@app/types/helper';
import { EditProfileInitialValues } from '@app/types/user.type';
import { editProfileValidationSchema } from '@app/validations/user.validation';
import userAvatar from '@assets/images/avatar/anonymus.png';
import backgroundUser from '@assets/images/background/backgroundUser.png';
import useObservable from '@core/hooks/use-observable.hook';
import StorageService from '@core/services/storage';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function UserInfo() {
  const { t } = useTranslation();
  const formRef = createRef<FormikContextType<EditProfileInitialValues>>();
  const { subscribeOnce } = useObservable();
  const storedUserInfoRaw: string | null = StorageService.get(localStorageKeys.USER_INFO);
  const storedUserInfoString: string = storedUserInfoRaw ?? '';
  const storedUserInfo = JSON.parse(storedUserInfoString);
  console.log(storedUserInfo);
  const handleSubmit = (id: EditProfileInitialValues) => {
    // subscribeOnce(UserService.update(id), (editUserRes: EditProfileResponse) => {
    //   console.log(editUserRes);
    //   if (editUserRes.status) {
    //     openPortalDialog(WarningModal, {
    //       message: 'register.confirmEmail',
    //     });
    //   }
    // });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundUser})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-1/3 flex items-center rounded-[10px] bg-white shadow-6 ">
        <div className="w-full flex-1 text-center rounded-gray-300 p-4 ">
          <h2 className="text-[50px] font-bold text-center">{t('user-info.public-profile')}</h2>
          <Formik
            displayName="EditProfileForm"
            initialValues={INITIAL_VALUES.EDIT_PROFILE}
            onSubmit={handleSubmit}
            innerRef={formRef}
            validationSchema={editProfileValidationSchema}
            validateOnChange
            validateOnBlur
          >
            <Form className="max-w-xl mx-auto p-8 rounded-[10px]">
              <div className="flex flex-col items-center ">
                {selectedFile ? (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected Avatar"
                    className="w-70 h-70 object-cover rounded-[10px] border"
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src={userAvatar}
                    alt="Selected Avatar"
                    className="w-70 h-70 object-cover rounded-[10px] border"
                    aria-hidden="true"
                  />
                )}
                <div className="mt-5 mb-3">
                  <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                    {t('user-info.upload-avatar')}
                  </label>
                  <input
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="sr-only mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="flex">
                {formFields.edit_profile_1.map((field, index) => (
                  <FormControl key={index} name={field.name}>
                    <Input
                      width="auto"
                      className=" w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                      placeholder={t(field.placeholder)}
                      inputClassName="w-full"
                      errorClassName="text-red-500 text-xs"
                      type={field.type as FieldType}
                      value={storedUserInfo[field.name]}
                    />
                  </FormControl>
                ))}
              </div>
              <div className="flex">
                {formFields.edit_profile_2.map((field, index) => (
                  <FormControl key={index} name={field.name}>
                    <Input
                      width="auto"
                      className=" w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                      placeholder={t(field.placeholder)}
                      inputClassName="w-full"
                      errorClassName="text-red-500 text-xs"
                      type={field.type as FieldType}
                      value={storedUserInfo[field.name]}
                    />
                  </FormControl>
                ))}
              </div>
              {formFields.edit_profile_3.map((field, index) => (
                <FormControl key={index} name={field.name}>
                  <Input
                    width="auto"
                    className=" !max-w-none w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                    placeholder={t(field.placeholder)}
                    inputClassName="w-full"
                    errorClassName="text-red-500 text-xs"
                    type={field.type as FieldType}
                    value={storedUserInfo[field.name]}
                  />
                </FormControl>
              ))}
              <div>
                <Button
                  type="submit"
                  label={t('user-info.save-profile')}
                  width="w-full"
                  size="m"
                  className="rounded-[10px] bg-blue-gray-500 text-white hover:bg-blue-gray-700"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
