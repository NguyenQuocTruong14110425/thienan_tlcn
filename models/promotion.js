const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


var PromotionSchema = new Schema({
    namepromotion: { type: String },
    
});

module.exports = mongoose.model('Promotion', PromotionSchema);