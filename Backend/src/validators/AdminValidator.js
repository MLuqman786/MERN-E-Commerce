import Joi from "joi";

const AdminValidator = {
  validateAdmin: (req, res, next) => {
    try {
      const body = req.body;
      const schema = Joi.object({
        email: Joi.string().email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        }),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
      });

      const { error, value } = schema.validate(body);
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
          error,
        });
      }
      return next();
    } catch (error) {
      console.log(`Error in validation middleware ${err}`);
    }
  },
};

export default AdminValidator;
