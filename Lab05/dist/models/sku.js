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
