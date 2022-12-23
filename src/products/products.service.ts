import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';

const products : Product[] = [] ;


@Injectable()
export class ProductsService {
    createProduct(product: Product) {
        if(product.productPrice && product.productName){
            product.id = products.length;
            product.isAvailable = true;
            product.isDelivered = false;
            product.isCancelled = false;
            products.push(product);
        }
        return {
            status: 201,
            msg: "product created successfully",
            msg1: products
        };
    }

    getOneProduct(id: number) {
        return {
            status: 200,
            msg: "product gotten successfully",
            msg1: products[id]
        };
    }
    

    getAllProducts = () => {
        products.filter((product) => product.isAvailable);
    }

    updateOneProduct = (id:number, product:Product) => {
        if(products[id]){
            products[id] = {
                "productName" : product.productName || products[id].productName,
                "id": products[id].id,
                "productPrice": product.productPrice || products[id].productPrice,
                "isAvailable": product.isAvailable || products[id].isAvailable,
                "isDelivered": product.isDelivered || products[id].isDelivered,
                "isCancelled": product.isCancelled || products[id].isCancelled
            }
            return {
                msg: products[id],
                msg1: "Product Data updated successfully"
            };
        }else{
            return "Product not found" ;
        }
    }
}
