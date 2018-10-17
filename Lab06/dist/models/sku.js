"use strict";
class Sku {
    constructor(sku = "", description = "", createDate = null, image = "", family = "") {
        this.sku = sku;
        this.description = description;
        this.createDate = createDate;
        this.image = image;
        this.family = family;
    }
}
exports.Sku = Sku;
// var mongoose = require("mongoose"),
//   Schema = mongoose.Schema;
// var Sku = new Schema({
//   sku: { type: String },
//   description: { type: String },
//   createDate: { type: Date },
//   image: { type: String },
//   family: { type: String }
// });
// module.exports = mongoose.model("Sku", Sku);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
exports.SkuSchema = new Schema({
    sku: {
        type: String,
        required: 'Enter a first name'
    },
    description: {
        type: String,
        required: 'Enter a last name'
    },
    createDate: {
        type: Date
    },
    family: {
        type: String
    },
    image: {
        type: String
    }
});
