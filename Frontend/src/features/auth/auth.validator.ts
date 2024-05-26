import * as yup from "yup";

export const loginValidator = yup.object().shape({
  email: yup.string().required("email is required"),
  password: yup.string().required("Password is required").min(6).max(32),
});
export const registerValidator = yup.object().shape({
  firstName: yup.string().required("first name is required"),
  lastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .email("please provide a valid email address")
    .required("email is required"),
  password: yup.string().required("password is required"),
});
