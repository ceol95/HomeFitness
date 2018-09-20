var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title: {
        type: String,
        default: ""
    },
    author:{
        type: String,
        default: ""
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        default: ""
    },
    status: {
        type: [{
            type: String,
            enum: ['public','hide']
        }],
        default: ['public']
    }

});



module.exports = mongoose.model('Blog',BlogSchema);