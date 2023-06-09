import { IconType } from "react-icons";
import { User, Listing, Reservation } from "@prisma/client";
import { Range, RangeKeyDict } from "react-date-range";

// Constants

export enum RentModalSteps {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

export enum SearchModalSteps {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
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

export type SafeUser = Omit<
  User,
  "createdAt" | "updateAt" | "emailVerified"
> & {
  createdAt: string;
  updateAt: string;
  emailVerified?: string | null;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
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

export type Country = {
  flag: string;
  label: string;
  latlang: number[];
  region: string;
  value: string;
};

export interface RentForm {
  category: string;
  location: null | Country;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
}

export interface SearchForm {
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  dateRange: Range;
  location: Country | null;
}

export interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

export interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

export interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

export interface ReservationsClientProps extends TripsClientProps {}

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

export interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export interface PropertiesClientProps extends FavoritesClientProps {}

export interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null;
}

export interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

export interface ListingInfoPropst {
  user: SafeUser;
  category: Category | undefined;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  locationValue: string;
}

export interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

export interface CalendarInputProps {
  value: Range;
  onChange?: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

export interface ErrorProps {
  error: Error;
}

// Route Params

export interface ListingIdParams {
  params: {
    listingId?: string;
  };
}

export interface ReservationIdParams {
  params: { reservationId?: string };
}

export interface UseFavoriteParams {
  listingId: string;
  currentUser?: SafeUser | null;
}

export interface getListingByIdParams {
  listingId?: string;
}

export interface getReservationsParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export interface getListingsParams {
  userId?: string;
  bathroomCount?: number;
  roomCount?: number;
  guestCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}
export interface HomePageProps {
  searchParams: getListingsParams;
}
