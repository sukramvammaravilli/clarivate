require("reflect-metadata");
const { DataSource } = require("typeorm");
const Product = require("./schema/product");
const Category = require("./schema/category");

const AppDataSource = new DataSource({
  ...require("./orm_config"),
  entities: [Product, Category],
});

module.exports = AppDataSource;
