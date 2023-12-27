const getBooks = (req, res) => {
  try {
    res.send({ message: "get all books" });
  } catch (error) {
    next(error);
  }
};
const addBook = (req, res) => {
  console.log(req.body);
  try {
    res.send({ message: "add a book" });
  } catch (error) {
    next(error);
  }
};
const updateBook = (req, res, next) => {
  try {
    res.send({
      message: `update a book with id ${req.params["id"]}`,
    });
  } catch (error) {
    next(error);
  }
};
const deleteBook = (req, res, next) => {
  try {
    throw new Error("invalid request");
    // res.send({
    //   message: `update a book with id ${req.params.id}`,
    // });
  } catch (err) {
    next(err);
  }
};

module.exports = { getBooks, addBook, updateBook, deleteBook };
