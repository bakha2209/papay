console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr.js")

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2 Session code


// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//Routing code
app.use("/resto", router_bssr)
app.use("/", router);


module.exports=app