// import Button from '@app/components/button';
// import { FormControl } from '@app/components/form-control';
// import Input from '@app/components/input';
// import { ForgotPasswordInitialValues, SignUpInitialValues } from '@app/types';
// import { forgotPasswordValidationSchema } from '@app/validations';
// import useObservable from '@core/hooks/use-observable.hook';
// import { Form, Formik, FormikContextType } from 'formik';
// import { createRef, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import backgroundRegister from '../../../assets/images/background/backgroundRegister.png';
// import page500 from '../../../assets/images/logo/page500.png';
// import { INITIAL_VALUES } from '@app/common/constants';

// export const Register = () => {
//   const { t } = useTranslation();
//   const formRef = createRef<FormikContextType<ForgotPasswordInitialValues>>();
//   const dispatch = useDispatch();
//   const { subscribeOnce } = useObservable();
//   useEffect(() => {
//     if (formRef.current) {
//       // const formValues = formRef.current.values;
//       // formRef.current.setFieldValue('username', 'Va deeptroy');
//       // console.log('Form Values:', formValues);
//     }
//   }, [formRef]);
//   const handleSubmit = (values: ForgotPasswordInitialValues) => {
//     // subscribeOnce(AuthService.login(values.username, values.password), (LoginRes: LoginResponse) => {
//     //   if (LoginRes.role === ROLE.STUDENT) {
//     //     StorageService.set(ACCESS_TOKEN_KEY, LoginRes.jwt);
//     //     StorageService.setObject(USER_INFO_KEY, {
//     //       _id: LoginRes._id,
//     //       username: LoginRes.username,
//     //     });
//     //     dispatch(storeUser(LoginRes));
//     //   }
//     // });
//   };
//   return (
//     <div
//       className="flex items-center justify-center min-h-screen "
//       style={{ backgroundImage: `url(${backgroundRegister})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       <div className=" flex items-center rounded-[10px] bg-blue-50 shadow-6 ">
//         <div className="flex-1 ml-8">
//           <img src={page500} alt="Your Image" className="w-100 h-100 object-cover rounded" />
//         </div>
//         <div className="flex-1 text-center rounded border-gray-300 p-4 ">
//           <h2 className="text-[50px] font-bold text-center">{t('register.register')}</h2>
//           <Formik
//             displayName="SignUpForm"
//             initialValues={INITIAL_VALUES.FORGOT_PASSWORD}
//             onSubmit={handleSubmit}
//             innerRef={formRef}
//             validationSchema={forgotPasswordValidationSchema}
//             validateOnChange
//             validateOnBlur
//           >
//             <Form className="max-w-lg mx-auto p-8 border shadow-6 rounded-[10px]">
//               <FormControl name="email">
//                 <Input
//                   width="auto"
//                   className="w-full mb-5 p-1 rounded-[10px] focus:outline-none focus:border-blue-500 mx-auto"
//                   placeholder={t('register.email')}
//                   inputClassName="w-full"
//                   errorClassName="text-red-500 text-xs"
//                 />
//               </FormControl>
//               <div>
//                 <Button type="submit" label={t('register.signup')} width="w-full" size="m" className="rounded-[10px]" />
//                 <small>{t('register.or')}</small>
//                 <div className="mt-2 text-sm text-blue-500 text-center">
//                   <Link
//                     to={'/'}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="bg-blue-gray-500 text-white px-4 py-2 rounded-full"
//                   >
//                     {t('register.account')}
//                   </Link>
//                 </div>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };
