import { ROLES } from '@app/common/constants';
import { File } from 'buffer';

export interface EditProfileInitialValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: ROLES;
  bio: string;
}
