require("dotenv").config()

const { DEV_DATABASE_HOST, DEV_DATABASE_USERNAME, DEV_DATABASE_PASSWORD } = process.env;

console.log(DEV_DATABASE_PASSWORD)

module.exports=
{
  development: {
    username: DEV_DATABASE_USERNAME,
    password: DEV_DATABASE_PASSWORD,
    database: "database_development",
    host: DEV_DATABASE_HOST,
    dialect: "postgres"
  },
  test: {
    username: DEV_DATABASE_USERNAME,
    password: "DEV_DATABASE_PASSWORD",
    database: "database_test",
    host: DEV_DATABASE_HOST,
    dialect: "postgres"
  },
  production: {
    username: DEV_DATABASE_USERNAME,
    password: "DEV_DATABASE_PASSWORD",
    database: "database_production",
    host: DEV_DATABASE_HOST,
    dialect: "postgres"
  }
}
