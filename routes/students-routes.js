const express = require("express");

const router = express.Router();

//get all students
router.get("/", (req, res) => {
  res.send({ message: "get all students" });
});
//add a book
router.post("/", (req, res) => {
  res.send({ message: "add a student" });
});
//update a book
router.put("/:id", (req, res) => {
  res.send({
    message: `update a student with id ${req.params["id"]}`,
  });
});
//delete a book
router.delete("/:id", (req, res) => {
  res.send({ message: `delete a students with id ${req.params["id"]}` });
});

module.exports = router;
