const mongoose = require("mongoose")

const adminschema=mongoose.Schema({
    FirstName:{type:String},
   LastName:{type:String},
   Age:{type:String},
   Place:{type:String},
   Email:{type:String},
   Password:{type:String},

})
const admin=mongoose.model("admin",adminschema)
module.exports=admin