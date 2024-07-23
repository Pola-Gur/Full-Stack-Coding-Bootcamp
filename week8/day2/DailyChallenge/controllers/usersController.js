const userModel = require("../models/userModels.js")

module.exports = {
    registerUser: async(req, res) => {
        const { username, password, email, first_name, last_name} = req.body;

        const user = {username, password, email, first_name, last_name}

        try {
            const userInfo = await userMpdel.createUser(user);
            res.status(201).json({
                message: "User registred successfully",
                user: userInfo, 
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "internal server error"})
        }
    }.
};