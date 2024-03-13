const { tryEach } = require('async');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: Schema.Types.ObjectId, ref: 'Genre', required: true, maxLength: 100},
  }
);


//Export model
module.exports = mongoose.model('Genre', GenreSchema);
