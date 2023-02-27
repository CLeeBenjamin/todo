// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'todo4',
      user:     'postgres',
      password: ''
    }
  },

  production: {
    client: 'pg',
    connection: 'postgresql://postgres:XJp2e2xdBA20kHFPgnyW@containers-us-west-163.railway.app:6021/railway'
    ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
