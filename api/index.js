const express = require("express");
const session = require("express-session");
const path = require("path");
const port = 3001;

const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());

app.use(session({
  secret:"I am a japanese woman  ",
  resave: false,
  saveUninitialized:true,
  cookie:{secure: "auto"}

})
);

app.use("/api/v1/users", userRoutes);

app.use(express.static(path.join(__dirname, "../build")));
app.listen(port,(err)=>{
  if(err){
    console.error("The server could not be stated ...");
    console.log(err);
    return;
  }
  console.log(`Listening on port ${port}`);
})