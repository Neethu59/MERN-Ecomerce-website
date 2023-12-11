const mongoose = require("mongoose")

const clientschema=mongoose.Schema({
    FirstName:{type:String},
   LastName:{type:String},
   Age:{type:String},
   Place:{type:String},
   Email:{type:String},
   Password:{type:String},

})
const client=mongoose.model("client",clientschema)
module.exports=client