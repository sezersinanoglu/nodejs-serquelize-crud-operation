module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "YOUR PASSWORD",
    DB: "YOUR DB NAME",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };