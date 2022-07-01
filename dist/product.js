"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, type, price, amount, dateOfCreate, describe) {
        this._id = 0;
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._dateOfCreate = dateOfCreate;
        this._describe = describe;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get price() {
        return this._price;
    }
    get dateOfCreate() {
        return this._dateOfCreate;
    }
    get describe() {
        return this._describe;
    }
    set id(value) {
        this._id = value;
    }
    set name(value) {
        this._name = value;
    }
    set type(value) {
        this._type = value;
    }
    set price(value) {
        this._price = value;
    }
    set dateOfCreate(value) {
        this._dateOfCreate = value;
    }
    set describe(value) {
        this._describe = value;
    }
}
exports.Product = Product;
