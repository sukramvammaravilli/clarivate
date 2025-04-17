const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "product",
  tableName: "products",
  columns: {
    id: { primary: true, type: "int", generated: true },
    productName: { type: "varchar" },
    description: { type: "text" },
    price: { type: "decimal" },
    stockQuantity: { type: "int" },
    createdAt: { type: "timestamp", createDate: true },
    updatedAt: { type: "timestamp", updateDate: true },
  },
  relations: {
    category: {
      type: "many-to-one",
      target: "Category",
      joinColumn: { name: "categoryId" },
      eager: true,
    },
  },
});
