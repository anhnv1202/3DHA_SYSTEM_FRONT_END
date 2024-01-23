import { INITIAL_VALUES, PATHS, SystemMessage, dropDownItems, localStorageKeys } from '@app/common/constants';
import { formFields } from '@app/common/constants/const';
import Button from '@app/components/button';
import DropDown from '@app/components/dropdown';
import { FormControl } from '@app/components/form-control';
import Input from '@app/components/input';
import { addToast } from '@app/components/toast/toast.service';
import UserService from '@app/services/http/user.service';
import { AuthContextType, User } from '@app/types';
import { FieldType } from '@app/types/helper';
import { EditProfileInitialValues } from '@app/types/user.type';
import { editProfileValidationSchema } from '@app/validations/user.validation';
import backgroundUser from '@assets/images/background/backgroundUser.png';
import { useAuth } from '@core/context/auth.context';
import useObservable from '@core/hooks/use-observable.hook';
import StorageService from '@core/services/storage';
import { Image } from '@nextui-org/react';
import { Form, Formik, FormikContextType } from 'formik';
import { createRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const { t } = useTranslation();
  const { user, _setUser } = useAuth() as AuthContextType;
  const formRef = createRef<FormikContextType<EditProfileInitialValues>>();
  const [isMounted, setIsMounted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const navigate = useNavigate();
  const { subscribeOnce } = useObservable();

  useEffect(() => {
    if (user && formRef) {
      formRef.current?.setValues({ ...user } as unknown as EditProfileInitialValues);
      setIsMounted(true);
    } else {
      navigate(PATHS.HOMEPAGE);
    }
  }, [formRef, user, navigate]);
  if (!user) return;
  const handleSubmit = (values: EditProfileInitialValues) => {
    subscribeOnce(UserService.update(user._id, { ...values, avatar: selectedFile }), (res: User) => {
      if (res) {
        _setUser(res);
        StorageService.setObject(localStorageKeys.USER_INFO, res);
        addToast({ text: SystemMessage.EDIT_PROFILE, position: 'top-right' });
      }
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setSelectedFile(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    isMounted && (
      <div
        className="flex items-center justify-center min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundUser})` }}
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
                    <Image
                      src={selectedFile}
                      alt="Selected Avatar"
                      className="w-70 h-70 object-cover rounded-[10px] border"
                      aria-hidden="true"
                    />
                  ) : (
                    <Image
                      src={user.avatar}
                      alt="Selected Avatar"
                      className="w-70 h-70 object-cover rounded-[10px] border"
                      aria-hidden="true"
                    />
                  )}
                  <div className="mt-5 mb-3">
                    <label htmlFor="avatar" className="text-lg block font-medium text-gray-700 cursor-pointer">
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
                        className="text-xl w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
                        placeholder={t(field.placeholder)}
                        inputClassName="w-full"
                        errorClassName="text-red-500 text-xs"
                        type={field.type as FieldType}
                      />
                    </FormControl>
                  ))}
                </div>
                {formFields.edit_profile_2.map((field, index) => (
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
                <FormControl name={formFields.edit_profile_3[0].name}>
                  <DropDown
                    items={dropDownItems}
                    defaultValue={user.role}
                    fieldName={'role'}
                    displayProp={'name'}
                    formikField={'role'}
                  />
                </FormControl>
                <div>
                  <Button
                    type="submit"
                    label={t('user-info.save-profile')}
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

export default EditProfile;
