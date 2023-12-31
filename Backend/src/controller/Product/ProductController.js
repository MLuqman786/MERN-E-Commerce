import ProductModel from "../../model/ProductModel.js";

const ProductController = {
  create: async (req, res) => {
    try {
      const { productName, productImage, productStock, productPrice } =
        req.body;
      console.log(req.body);
      await ProductModel.create({
        productName,
        productImage,
        productStock,
        productPrice,
      });
      return res.status(201).json({
        message: "Add Product successfully ",
      });
    } catch (error) {
      console.log("Error Accrued in product", error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },

  // login: async (req, res) => {
  //   try {
  //     const { email, password } = req.body;

  //     const CheckAdminEmail = await AdminModel.findOne({
  //       where: {
  //         email,
  //       },
  //     });

  //     if (!CheckAdminEmail) {
  //       return res.status(401).json({
  //         message: "Invalid credentials",
  //       });
  //     }

  //     const comparePassword = await compare(password, CheckAdminEmail.password);
  //     if (!comparePassword) {
  //       return res.status(401).json({
  //         message: "invalid credentials",
  //       });
  //     }

  //     const data = {
  //       id: CheckAdminEmail.id,
  //       email: CheckAdminEmail.email,
  //     };

  //     // create token
  //     const token = jwt.sign(data, process.env.JWT_SECRET, {
  //       expiresIn: "15d",
  //     });

  //     req.session.token = token;
  //     req.session.user = data;
  //     req.session.save();

  //     return res.status(200).json({
  //       message: "User Login Successfully",
  //       comparePassword,
  //       token,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({
  //       message: "SomeThing Bad happened",
  //       error,
  //     });
  //   }
  // },
};

export default ProductController;
