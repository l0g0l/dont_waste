// Creación Schema 
const mongoose = require("mongoose");

module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          name: String,
          lastname:String,
          email:String,
          password:String,
          
        },
        { timestamps: true }
      )
    );
  
    return User;
  };