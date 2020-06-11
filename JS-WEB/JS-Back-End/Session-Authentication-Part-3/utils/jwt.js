const jwt = require("jsonwebtoken");
const secret = "secret-message";

function createToken(data) {
  return jwt.sign(data, secret, { expiresIn: "10m" });
}
 function verifyToken(token) {
  return jwt.verify(token, secret, async (err, data) => {
    if (err) {
      throw err;
    }
    await data;
  });
}

module.exports = {
  createToken,
  verifyToken,
};
