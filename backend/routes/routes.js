module.exports = app => {
    const personCont = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    // Create a new Person
    router.post("/", personCont.create);
  
    // Retrieve all Person
    router.get("/", personCont.findAll);
    
    // Retrieve a single Person with id
    router.get("/:id", personCont.findOne);
  
    // Update a Person with id
    router.put("/:id", personCont.update);
  
    // Delete a Person with id
    router.put("/delete/:id", personCont.delete);
  
    app.use('/api/person', router);
  };
