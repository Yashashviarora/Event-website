const mongoose = require('mongoose');
const { stringify } = require('querystring');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  ingredients:{
    type:Array,
    required:true
  },
  category:{
    type:String,
    enum:['indian','chinese','american','spanish','mexican'],
    required:true
  },
  image:{
    type:String,
    required:true
  }
});
recipeSchema.index({ name: 'text', description: 'text' });
module.exports = mongoose.model('Recipe', recipeSchema);