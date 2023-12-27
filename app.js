const express = require("express"); //importing express
const app = express(); // express application object
const morgan = require("morgan");
const bookRoute = require("./routes/books-routes");
const studentRoute = require("./routes/students-routes");
const error = require("./middleware/error");

//essential middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes
app.use("/books", bookRoute);
app.use("/students", studentRoute);

//error handling middleware
app.use(error);

//server
app.listen(3000, () => {
  console.log("express server running on port: 3000");
});
