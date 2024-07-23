const { r} = require("../config/db.js");
const bcrypt = require("bcrypt");

module.exports = {
    createUser: async (userinfo) => {
        const {username, password, email, first_name, last_name} = userinfo;

        const trx = await db.transaction();
        try {
            // insert user data into 'users' table
            const [user] = await trx("users").insert(
                {email, username, first_name, last_name },
                ['username', 'id']
            );
            //hash the password and insert into the 'hashpws' table
            const hashPassword = await bcrypt.hash(password+"", 10);

            await trx('hashpwd').insert(
                {
                    username: user.username,
                    password: hashPasswrod,
                });

                await text.commit()

                return user;

        } catch (error) {
            await text.rollback();
            throw error;
        }
    },
};