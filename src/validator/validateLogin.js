import Joi from "joi";

const adminLoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });
exports.adminLoginSchema = adminLoginSchema;

  const UserLoginSchema = Joi.object({  
    emailOrMobile: Joi.alternatives([
      Joi.string().email({ tlds: false }),
      Joi.string().pattern(/^[0-9]{10}$/),
    ])
      .required()
      .strip(),
    password: Joi.string().required(),
    mobile: Joi.forbidden().when("emailOrMobile", {
      is: Joi.string().pattern(/^[0-9]{10}$/),
      then: Joi.string().default(Joi.ref("emailOrMobile")),
    }),
    email: Joi.forbidden().when("emailOrMobile", {
      is: Joi.string().email({ tlds: false }),
      then: Joi.string().default(Joi.ref("emailOrMobile")),
    }),
  });
  exports.UserLoginSchema = UserLoginSchema;

  const vendorLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  
  exports.vendorLoginSchema = vendorLoginSchema;
  