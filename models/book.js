var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true, maxLength: 100},
                  //This type is to specify the field as a document key
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true, maxLength: 100},
    summary: {type: String, maxLength: 1000},
    isbn: {type: String, required: true, maxLength: 20},
    //you can use [{doc schema}] to make it a list
    genre: [{type: Schema.Types.ObjectId, ref: 'Author'}],
  }
);

//Export model
module.exports = mongoose.model('Book', BookSchema);
