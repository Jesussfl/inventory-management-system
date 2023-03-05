const login = async (req, res) => {
  console.log("hola");
  res.send({
    token: "test123",
  });
};

module.exports = { login };
