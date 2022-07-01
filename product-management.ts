import { Product } from "./product";

export class ProductManagement {

    private static productList :  Product[] =[];

    addNewProdduct(product : Product) : void {
        ProductManagement.productList.push(product);
    }

    getAllProduct(): Product[] {
        return ProductManagement.productList;
    }

    findProductByName(name : string) {
        let index = -1 ;
        for (let i = 0; i <ProductManagement.productList.length; i++) {
            if (name ===ProductManagement.productList[i].name) {
                index = i;
                break;
            }
        }
        return index;    
    }
    
    updateProductByName(name: string, newProduct : Product) {
        let index = this.findProductByName(name);
        if (index !== -1) {
            ProductManagement.productList[index] = newProduct;
            return true;
        }
        return false;
    }
    deleteProductByName(name : string) : boolean {
        let index = this.findProductByName(name)
        if (index !== -1) {
            ProductManagement.productList.splice(index, 1);
            return true;
        }
        return false;
    }
    

    }




    
