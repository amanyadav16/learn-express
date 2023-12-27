module.exports = (err, req, res, next) => {
  console.log(err);

  // Respond with a generic error message to the client
  res.status(500).send("Something went wrong!");
};
