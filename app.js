const express = require("express");
const path = require("path");
const app = express();
const homeRouter = require("./routes/home");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users");
const projectPath = require("./utility/projectPath");

app.set("view engine", "ejs");
app.set("views", "views")
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());;
app.use(express.static(path.join(projectPath, "public")));
app.use("/users", userRouter);
app.use("/", homeRouter);


app.listen(3000, ()=>{console.log("listening")});