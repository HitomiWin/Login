const crypto = require("crypto");

const encrypt =(password)=>{
  return(
    crypto
    .createHmac("sha256", "Login and List ")
    .update(password) // Hashes the password
    .digest("hex") // Encoding type
    );
}

module.exports={
  encrypt
}
