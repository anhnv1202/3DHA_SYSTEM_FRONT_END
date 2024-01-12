import { ComponentType, ReactElement } from 'react';

export type ChangeTypeOfKeys<T extends object, Keys extends keyof T, NewType> = {
  // Loop to every key. We gonna check if the key
  // is assignable to Keys. If yes, change the type.
  // Else, retain the type.
  [key in keyof T]: key extends Keys ? NewType : T[key];
};

export interface SocialMediaLink {
  platform: string;
  icon: ReactElement<any, any>;
  link: string;
}

export type FieldType = 'number' | 'text' | 'password' | 'date' | undefined;

export interface FormField {
  name: string;
  placeholder: string;
  type: string;
}
export interface NavbarLink {
  name: string;
  path: string;
}

export type ExtractPropsFromComponent<C> = C extends ComponentType<infer P> ? P : any;
