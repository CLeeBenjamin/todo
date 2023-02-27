const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:03u3omDeWf3QkXxw90bN@containers-us-west-110.railway.app:6972/railway'

const developmentPool = new Pool(
  {
    database: 'todo4',
    user:     'postgres',
    password: ''
  })
 
 
 const productionPool = new Pool({
  connectionString
 })
 

const pool = (process.env.NODE_ENV === "production" ? productionPool: developmentPool)


module.exports = pool