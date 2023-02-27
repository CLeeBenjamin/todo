const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:XJp2e2xdBA20kHFPgnyW@containers-us-west-163.railway.app:6021/railway'

// const developmentPool = new Pool(
//   {
//     database: 'todo4',
//     user:     'postgres',
//     password: ''
//   })
 
 
 const productionPool = new Pool({
  connectionString
 })
 

// const pool = (process.env.NODE_ENV === "production" ? productionPool: developmentPool)

const pool = productionPool
 
module.exports = pool