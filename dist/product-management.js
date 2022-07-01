"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    addNewProdduct(product) {
        ProductManagement.productList.push(product);
    }
    getAllProduct() {
        return ProductManagement.productList;
    }
    findProductByName(name) {
        let index = -1;
        for (let i = 0; i < ProductManagement.productList.length; i++) {
            if (name === ProductManagement.productList[i].name) {
                index = i;
                break;
            }
        }
        return index;
    }
    updateProductByName(name, newProduct) {
        let index = this.findProductByName(name);
        if (index !== -1) {
            ProductManagement.productList[index] = newProduct;
            return true;
        }
        return false;
    }
    deleteProductByName(name) {
        let index = this.findProductByName(name);
        if (index !== -1) {
            ProductManagement.productList.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.productList = [];
