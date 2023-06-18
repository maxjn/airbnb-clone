import { IconType } from "react-icons";
import { User } from "@prisma/client";

// Constants

export enum RentModalSteps {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

// Props
export interface UploadImageInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
}
export interface CounterInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  title: string;
  subtitle: string;
}

export interface RadioInputProps
  extends React.ComponentPropsWithoutRef<"input"> {
  name: string;
  label: string;
  options: Category[];
}
export interface CategoryInputProps extends CategoryBoxProps {
  onClick: (value: string) => void;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface MenuItemProps {
  onClick: () => void;
  label: string;
}
//PrimaryBtn Attributes
type PrimaryBtnAtrInitial = {
  primaryBtnLabel?: string;
  primaryBtnType: "button" | "submit" | "reset";
};

type PrimaryFormBtnAtr = PrimaryBtnAtrInitial & {
  primaryBtnFormId: string;
  primaryBtnAction?: never;
};
type PrimaryPublicBtnAtr = PrimaryBtnAtrInitial & {
  primaryBtnFormId?: never;
  primaryBtnAction: () => void;
};

export type PrimaryBtnAttributes = PrimaryFormBtnAtr | PrimaryPublicBtnAtr;

//SecondaryBtn Attributes
export type SecondaryBtnAttributes = {
  secondaryBtnAction?: () => void;
  secondaryBtnFormId?: string | undefined;
  secondaryBtnLabel?: string;
  secondaryBtnType?: "button" | "submit" | "reset";
};

// Modal
type InitialModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  primaryBtnLabel?: string;
  disabled?: boolean;
  secondaryBtnAction?: () => void;
  secondaryBtnFormId?: string | undefined;
  secondaryBtnLabel?: string;
  secondaryBtnType?: "button" | "submit" | "reset";
  primaryBtnType: "button" | "submit" | "reset";
};

type ModalFormBTN = InitialModalProps & {
  primaryBtnFormId: string;
  primaryBtnAction?: never;
};
type ModalPublicBTN = InitialModalProps & {
  primaryBtnFormId?: never;
  primaryBtnAction: () => void;
};

export type ModalProps = ModalPublicBTN | ModalFormBTN;

export type InitialButtonProps = {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  btnType: "button" | "submit" | "reset";
};

type FormBTN = InitialButtonProps & {
  formId: string;
  onClick?: never;
};
type PublicBTN = InitialButtonProps & {
  formId?: never;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProps = FormBTN | PublicBTN;

export interface HeadingProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}

export interface InputProps {
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  error?: string;
  touched?: boolean;
}

type SafeUser = Omit<User, "createdAt" | "updateAt" | "emailVerified"> & {
  createdAt: string;
  updateAt: string;
  emailVerified?: string | null;
};

export interface NavBarProps {
  currentUser?: SafeUser | null;
}

export interface AvatarProps {
  src?: string | null;
}

export interface CategoryBoxProps extends JSX.IntrinsicAttributes {
  icon: IconType;
  label: string;
  selected?: boolean;
}

export interface SelectCountryProps {
  name: string;
}

// Form Initial Values
export interface RegisterForm {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface LoginForm {
  email?: string;
  password?: string;
}

export interface Country {
  flag: string;
  label: string;
  latlang: number[];
  region: string;
  value: string;
}

export interface RentForm {
  category: string;
  location: string | null | Country;
  guestCount: number;
  roomCount: 1;
  bathroomCount: number;
  imageSrc: "";
  price: 1;
  title: "";
  description: "";
}

// States
// Define a type for the slice state
export interface ModalState {
  isOpen: boolean;
}

export interface Category {
  icon: IconType;
  label: string;
  description: string;
}
