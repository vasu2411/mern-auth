const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = isEmpty(data.name) ? "" : data.name;
  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.password) ? "" : data.password;
  data.confirm_password = isEmpty(data.confirm_password)
    ? ""
    : data.confirm_password;
  data.dob = isEmpty(data.dob) ? "" : data.dob;
  data.phone_number = isEmpty(data.phone_number) ? "" : data.phone_number;
  data.date = isEmpty(data.date) ? "" : data.date;

  if (validator.isEmpty(data.name)) {
    errors.name = "Name field must be not empty";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field must be not empty";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password field must be not empty";
  }

  if (validator.isEmpty(data.confirm_password)) {
    errors.confirm_password = "Confirm password field must be not empty";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!validator.equals(data.password, data.confirm_password)) {
    errors.confirm_password = "Password must match";
  }

  if (validator.isEmpty(data.dob)) {
    errors.dob = "Dob field must be not empty";
  }

  if (validator.isEmpty(data.phone_number)) {
    errors.phone_number = "Phone number field must be not empty";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
