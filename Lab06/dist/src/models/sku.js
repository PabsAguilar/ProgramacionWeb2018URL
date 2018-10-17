"use strict";
var Sku = (function () {
    function Sku(sku, description, createDate, image, family) {
        if (sku === void 0) { sku = ""; }
        if (description === void 0) { description = ""; }
        if (createDate === void 0) { createDate = null; }
        if (image === void 0) { image = ""; }
        if (family === void 0) { family = ""; }
        this.sku = sku;
        this.description = description;
        this.createDate = createDate;
        this.image = image;
        this.family = family;
    }
    return Sku;
}());
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
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
