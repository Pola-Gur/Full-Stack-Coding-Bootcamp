const userModel = require("../models/userModels.js")
const bcrypt = require("bcrypt");


module.exports = {
    registerUser: async(req, res) => {
        const { username, password, email, first_name, last_name} = req.body;

        const user = {username, password, email, first_name, last_name}

        try {
            const userInfo = await userModel.createUser(user);
            res.status(201).json({
                message: "User registred successfully",
                user: userInfo, 
            });
        } catch (error) {
            console.log(error.code);
            if(error.code == 23505){
                return res.status(500).json({error: "Email or username already exist"})    
            }
            res.status(500).json({error: "internal server error"})
        }
    },

    loginUser: async (req, res) => {
        const {email, username, password} = req.body;

        try {
            const user = await userModel.getUserByUsername(email,username);

            if(!user) {
                return res.status(404).json({message: "user not found"});

            }

            const passwordMatch = await bcrypt.compare(password+"", user.password);

            if(!passwordMatch) {
                return res.status(401).json({message: "Some problem with authentication"})
            }

            res.json({
                message: "Login succesful",
                user: { userid: user.id, username: user.username },
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: "internal server error"})
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.getAllUsers();
            res.json(users);
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: "internal server error"})
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id} = req.params;
            const { email, username, first_name, last_name } = req.body;

            const user = await userModel.getUserById(id); 

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const updatedUser = await userModel.updateUserById(id, { email, username, first_name, last_name });

            res.json({
                message: "User updated successfully",
                user: updatedUser,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal server error" });
        }
    },

    getUser: async (req, res) => {
        try {
            const { id} = req.params;
            const user = await userModel.getUserById(id); 

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
    
            res.json(user);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "User not found"})
        }
    }
};