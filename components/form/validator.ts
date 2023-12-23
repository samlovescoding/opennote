import * as Yup from "yup";

const validator = Yup;

export const createValidator = validator.object;

export const as = validator;

export default validator;
