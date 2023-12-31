import { compare, hash } from "bcrypt";
import AdminModel from "../../model/AdminModel.js";
import jwt from "jsonwebtoken";

const AdminAuthController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const CheckAdminEmail = await AdminModel.findOne({
        where: {
          email,
        },
      });

      if (CheckAdminEmail) {
        return res.status(400).json({
          message: "User with this email already exist ",
        });
      }

      const hPassword = await hash(password, 10);
      //// console.log("This is Hash Password", hPassword);

      await AdminModel.create({
        name,
        email,
        password: hPassword,
      });
      return res.status(201).json({
        message: "Admin successfully registered",
      });
    } catch (error) {
      console.log("Error Accord during registered ", error);
      return res.status(500).json({
        error,
        message: "Something Bad Happened",
      });
    }
  },

  //?todo ______________________________<< LOGIN >>_____________________________________

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const CheckAdminEmail = await AdminModel.findOne({
        where: {
          email,
        },
      });

      if (!CheckAdminEmail) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const comparePassword = await compare(password, CheckAdminEmail.password);
      if (!comparePassword) {
        return res.status(401).json({
          message: "invalid credentials",
        });
      }

      const data = {
        id: CheckAdminEmail.id,
        email: CheckAdminEmail.email,
      };

      // create token
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "15d",
      });

      req.session.token = token;
      req.session.user = data;
      req.session.save();

      return res.status(200).json({
        message: "User Login Successfully",
        comparePassword,
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "SomeThing Bad happened",
        error,
      });
    }
  },
};

export default AdminAuthController;
