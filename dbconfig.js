const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:gMdAWmsuM9IbacpIVBmX@containers-us-west-98.railway.app:7525/railway'

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