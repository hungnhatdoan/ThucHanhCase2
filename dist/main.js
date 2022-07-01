"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_management_1 = require("./product-management");
const product_1 = require("./product");
const rl = __importStar(require("readline-sync"));
let prodductManagement = new product_management_1.ProductManagement();
let choice = -1;
function menu() {
    console.log('1. Hiển thị danh sách hàng hóa');
    console.log('2. Tìm kiếm mặt hàng theo tên sản phẩm');
    console.log('3. Thêm mặt hàng');
    console.log('4. Chỉnh sửa thông tin mặt hàng');
    console.log('5. Xóa mặt hàng');
    console.log('0. Thoát');
}
do {
    menu();
    let product = prodductManagement.getAllProduct();
    choice = +rl.question('Nhập lựa chọn của bạn');
    switch (choice) {
        case 1: {
            console.log('Hiển thị danh sách hàng hóa');
            for (const products of product) {
                console.log(`${products.id} ${products.name} ${products.type} ${products.price} ${products.dateOfCreate} ${products.describe}`);
                break;
            }
        }
        case 2: {
            console.log('Tìm kiếm mặt hàng theo tên sản phẩm');
            let name = rl.question('Nhập tên sản phẩm cần tìm: ');
            let product = prodductManagement.findProductByName(name);
            if (product) {
                console.log('${product.id} - ${product.name} - ${product.price} - ${product.amount}- ${product.type} - ${product.describe}');
            }
            else {
                console.log('Không có dữ liệu phù hợp');
            }
            break;
        }
        case 3: {
            console.log('Thêm một mặt hàng');
            let id = +rl.question('Nhập id: ');
            let name = rl.question('Nhập tên sản phẩm: ');
            let price = +rl.question('Nhập giá sản phẩm: ');
            let amount = +rl.question('Nhập số lượng sản phẩm: ');
            let type = rl.question('Nhập loại sản phẩm: ');
            let describe = rl.question('Nhập mô tả sản phẩm: ');
            let dateOfCreate = new Date();
            let product = new product_1.Product(id, name, type, price, amount, dateOfCreate, describe);
            prodductManagement.addNewProdduct(product);
            break;
        }
        case 4: {
            console.log('Chỉnh sửa thông tin mặt hàng');
            let name = rl.question('Nhập tên sản phẩm cần chỉnh sửa: ');
            let product = prodductManagement.findProductByName(name);
            if (product) {
                let id = +rl.question('Nhập id: ');
                let price = +rl.question('Nhập giá sản phẩm: ');
                let amount = +rl.question('Nhập số lượng sản phẩm: ');
                let type = rl.question('Nhập loại sản phẩm: ');
                let describe = rl.question('Nhập mô tả sản phẩm: ');
                let dateOfCreate = new Date();
                let newProduct = new product_1.Product(id, name, type, price, amount, dateOfCreate, describe);
                if (prodductManagement.updateProductByName(name, newProduct)) {
                    console.log('Chỉnh sửa thành công');
                }
                else {
                    console.log('Không thể chỉnh sửa');
                }
            }
            break;
        }
        case 5: {
            console.log('Xóa mặt hàng');
            let name = rl.question('Nhập tên sản phẩm cần xóa: ');
            let product = prodductManagement.findProductByName(name);
            if (product) {
                prodductManagement.deleteProductByName(name);
                console.log('Xóa thành công');
            }
            else {
                console.log('Không tồn tại mặt hàn cần xóa');
                break;
            }
        }
    }
} while (choice != 0);
