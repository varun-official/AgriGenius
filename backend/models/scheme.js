const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemeSchema = new Schema({
    imgUrl:{
        type:String,
        required:true
    },
    link:{
        type: String,
        validate: {
          validator: function(v) {
            return /^https?:\/\/.+/.test(v);
          },
          message: 'Invalid URL',
        },
        required: true,  
    },
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    type:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Scheme',schemeSchema)