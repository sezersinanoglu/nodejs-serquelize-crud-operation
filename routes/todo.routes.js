const { authJwt } = require("../middleware");

module.exports = (app) => {
  const todos = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", [authJwt.verifyToken, authJwt.isModerator], todos.create);

  // Retrieve all Tutorials
  router.get("/", todos.findAll);

  // Retrieve all published Tutorials
  router.get("/published", todos.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", todos.findOne);

  // Update a Tutorial with id
  router.put("/:id",[authJwt.verifyToken, authJwt.isAdmin], todos.update);

  // Delete a Tutorial with id
  router.delete("/:id",[authJwt.verifyToken, authJwt.isAdmin], todos.delete);

  // Delete all Tutorials
  router.delete("/",[authJwt.verifyToken, authJwt.isAdmin], todos.deleteAll);

  app.use("/api/todos", router);
};
