const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
     employee:{type:String,required:true},
     salary:{type:Number,required:true},
     status:{type:Boolean,required:true}
});

module.exports = mongoose.model('Post',mongooseSchema);
