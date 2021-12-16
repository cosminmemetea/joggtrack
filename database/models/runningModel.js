const mongoose = require('mongoose')

const runningSchema = new mongoose.Schema({
    time : String,
    distance: String,
    location: String
},{
    timestamps:true
})

module.exports  = mongoose.model('Running', runningSchema);