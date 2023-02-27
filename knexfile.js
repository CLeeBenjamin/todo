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
    connection: 'postgresql://postgres:03u3omDeWf3QkXxw90bN@containers-us-west-110.railway.app:6972/railway'
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
