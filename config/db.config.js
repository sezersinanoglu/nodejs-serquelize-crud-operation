module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: <>YORU PASSWORD</>,
    DB: <>YOUR DB</>,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };