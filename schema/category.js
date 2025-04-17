const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "category",
  tableName: "categories",
  columns: {
    id: { primary: true, type: "int", generated: true },
    categoryName: { type: "varchar" },
    description: { type: "text" },
    isActive: { type: "boolean", default: true },
    createdAt: { type: "timestamp", createDate: true },
    updatedAt: { type: "timestamp", updateDate: true },
  },
  relations: {
    products: {
      type: "one-to-many",
      target: "Product",
      inverseSide: "category",
    },
  },
});
