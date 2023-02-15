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
    connection: 'postgresql://postgres:f1ynjwcZwvCVSbPqlFAH@containers-us-west-32.railway.app:7290/railway'
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
