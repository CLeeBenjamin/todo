const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:f1ynjwcZwvCVSbPqlFAH@containers-us-west-32.railway.app:7290/railway'

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