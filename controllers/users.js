const users = [];
const getAllUsers = (req, res)=>{
    res.render("users.ejs", {users:users, title: "Users"});
};

const postFormSubmitted = (req, res)=>{
    let newUser = {
        firstName: req.body.fname,
        lastName: req.body.lname
    };
    users.push(newUser);
    
    res.redirect("/users");
};

module.exports ={
    getAllUsers,
    postFormSubmitted
};