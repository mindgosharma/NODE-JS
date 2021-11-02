const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("../src/db/conn");
const studentRouter = require("../routers/student");
app.use(express.json())
app.use(studentRouter)

//Listening port
app.listen(port, ()=>{
     console.log(`connection is set up at port ${port}`);
})











// data dir-> C:\Program Files\MongoDB\Server\5.0\data\
// log dir-> C:\Program Files\MongoDB\Server\5.0\log\
// bin dir C:\Program Files\MongoDB\Server\5.0\bin