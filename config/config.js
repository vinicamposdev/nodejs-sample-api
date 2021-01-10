module.exports = {
  development: {
    username: "postgres",
    password: "docker",
    database: "postgres",
    host: "127.0.0.1",
    port: 5433,
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "docker",
    database: "database_test",
    host: "127.0.0.1",
    port: 5433,
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "docker",
    database: "database_production",
    host: "127.0.0.1",
    port: 5433,
    dialect: "postgres"
  }
}
