const joi = require("joi");

const registerSchema = joi.object({
  firstName: joi.string().required().trim().messages({
    "string.empty": "first name is required",
    "any.required": "first name is required",
  }),
  lastName: joi.string().required().trim().messages({
    "string.empty": "last name is required",
    "any.required": "last name is required",
  }),
  emailOrMobile: joi
    .alternatives([
      joi.string().email({ tlds: false }),
      joi.string().pattern(/^[0-9]{10}$/),
    ])
    .required()
    .messages({
      "alternatives.match": "invalid email address or mobile number",
      "any.required": "email address or mobile number is required",
    })
    .strip(),
  password: joi
    .string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabet and number",
      "any.required": "password is required",
    }),
  confirmPassword: joi
    .string()
    .required()
    .valid(joi.ref("password"))
    .messages({
      "string.empty": "confirm password is required",
      "any.only": "password and confirm password did not match",
      "any.required": "confirm password is required",
    })
    .strip(),
  email: joi
    .string()
    .forbidden()
    .when("emailOrMobile", {
      is: joi.string().email({ tlds: false }),
      then: joi.string().default(joi.ref("emailOrMobile")),
    }),
  mobile: joi
    .string()
    .forbidden()
    .when("emailOrMobile", {
      is: joi.string().pattern(/^[0-9]{10}$/),
      then: joi.string().default(joi.ref("emailOrMobile")),
    }),
});

const validateRegister = (req, res, next) => {
  const { value, error } = registerSchema.validate(req.body);
  if (error) {
    throw error;
  }
  req.body = value;
  next();
};

module.exports = validateRegister;
