var mongoose = require('mongoose');

//create a new mongoDB table called ItemSchema
var ItemSchema = new mongoose.Schema ({

  //ItemSchema table has a column for itemName, which is a string
  itemName :{
    type: String,
    required: true
  },

  //ItemSchema table has a column for itemLocation, which is an object with lat and lng props
  itemLocation :{
    type: Object,
    required: true
  },

   itemLng: {
    type: Number,
    required: true
  },

  itemLat: {
    type: Number,
    required: true
  }

});

//export the Item mongoose model that will fit into the ItemSchema table
module.exports = mongoose.model('Item', ItemSchema);

