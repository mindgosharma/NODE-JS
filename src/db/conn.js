const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(()=>{
     console.log("db connection successful");  
}).catch((e)=>{
     console.log("db not connected",e)
})