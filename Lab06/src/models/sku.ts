export class Sku {
  constructor(
    public sku: string = "",
    public description: string = "",
    public createDate: Date = null,
    public image: string = "",
    public family: string = ""
  ) {}
}

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
