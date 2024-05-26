import * as yup from "yup";

export const createLunchMenuValidator = yup.object().shape({
  title: yup.string().required("title is required"),
  description: yup.string().required("description is required"),
  date: yup.string().required("date is required"),
});
