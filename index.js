const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Connect Database
mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useFindAndModify:true,
    useUnifiedTopology: true
})
 .then(()=>console.log("Mongo Db connected"))
 .catch(err => console.log(err));

 app.use(cors());
app.use(express.json());

app.use("/auth",require('./routes/user'));

//serve build
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"client","build",'index.html'));
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log("server is running"));