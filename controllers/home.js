const express = require("express");


const getHome = (req, res)=>{
    res.render("home.ejs", {title: "Home"});
};

const postHome =(req, res)=>{
   
    res.redirect("/users");
};


module.exports ={
    getHome,
    postHome
};