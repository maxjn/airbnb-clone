import { string, object, number, ref, array } from "yup";

export const registerSchema = object({
  name: string().required("Required!"),
  email: string().email("Invalid email format!").required("Required"),
  password: string()
    .required("Required!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Must be at least 8 characters with 1 uppercase letter, and 1 number"
    ),
  confirmPassword: string()
    .required("Required!")
    .oneOf([ref("password")], "Password mismatch")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Must be at least 8 characters with 1 uppercase letter, and 1 number"
    ),
});

export const loginSchema = object({
  email: string().email("Invalid email format!").required("Required"),
  password: string()
    .required("Required!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Must be at least 8 characters with 1 uppercase letter, and 1 number"
    ),
});

export const RentSchema = object({
  category: string().required("Select a category first!"),
  imageSrc: string().required("Upload an image first!"),
  location: object({
    value: string(),
    label: string(),
    flag: string(),
    latlang: array().of(number()).length(2),
    region: string(),
  }).required("Select a country first!"),
  guestCount: number()
    .min(1, "Guest count cant be less than 1!")
    .required("Add guest count first!"),
  roomCount: number()
    .min(1, "Roomv count cant be less than 1!")
    .required("Add guest count first!"),
  bathroomCount: number()
    .min(1, "Bathroom count cant be less than 1!")
    .required("Add guest count first!"),
  title: string()
    .min(3, "Title is too Short")
    .max(100, "Title is too long")
    .required("Add title first!"),
  description: string()
    .min(100, "Description is too Short")
    .required("Add description first!"),
  price: number()
    .min(10, "Price must be more then $10 per night!")
    .required("Add price first!"),
});

export const SearchSchema = object({});
