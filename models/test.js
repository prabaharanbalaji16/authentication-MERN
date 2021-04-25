const mongoose = require('mongoose');
const testSchema = mongoose.Schema({
    title:{
        type:String
    },
    news:{
        type:String
    },
})
module.exports = mongoose.model("Test",testSchema);