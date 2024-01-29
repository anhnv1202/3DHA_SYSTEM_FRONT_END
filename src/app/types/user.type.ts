import { ROLES } from '@app/common/constants';

export interface EditProfileInitialValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: ROLES;
  avatar: string;
  bio: string;
}
