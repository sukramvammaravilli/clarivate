const express = require("express");
const AppDataSource = require("./database");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to MySQL database.");

    app.use("/", productRoutes);

    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
