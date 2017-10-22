const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


var CatalogSchema = new Schema({
    namecatalog: { type: String },
    
    products:[
        {
       _id: Schema.ObjectId
      
        }
    ]
});

module.exports = mongoose.model('Catalog', CatalogSchema);