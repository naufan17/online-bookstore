import { body } from "express-validator";

export const registerValidator = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isString()
      .withMessage("Name must be a string"),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("address")
      .notEmpty()
      .withMessage("Address is required")
      .isString()
      .withMessage("Address must be a string"),
    body("phone")
      .notEmpty()
      .withMessage("Phone is required")
      .isString()
      .withMessage("Phone must be a string"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isString()
      .withMessage("Password must be a string")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
  ]
}

export const loginValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isString()
      .withMessage("Password must be a string")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
  ]
}