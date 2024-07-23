const knex = require("knew");
require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT} = process.env
module.exports = {
    db: knex({
        
    })
}