const mongoose = require('mongoose'); 

const musicSchema = new mongoose.Schema[{
    artist : {
        type: String, 
    },
    name: {
        type: String, 
        required: true
    }
}]; 

module.exports = musicSchema; 
const dbConnection = require('../controllers/db.controller');
const Music = dbConnection.model('Music',wordSchema); 