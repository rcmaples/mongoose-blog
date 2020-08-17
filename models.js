'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const blogpostSchema = mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  author: {
    firstName: String,
    lastName: String,
  },
  publishDate: { type: Date, default: Date.now },
});

blogpostSchema.virtual('authorName').get(function () {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogpostSchema.methods.serialize = function () {
  return {
    id: this._id,
    authorName: this.authorName,
    title: this.title,
    conent: this.content,
    publishDate: this.publishDate,
  };
};

const Blogpost = mongoose.model('Blogpost', blogpostSchema);
module.exports = { Blogpost };
