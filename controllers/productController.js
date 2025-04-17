const AppDataSource = require("../database");
async function getAllProducts(req, res) {
  try {
    const productRepo = AppDataSource.getRepository("Product");
    const products = await productRepo.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { getAllProducts };
