import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';
import { Order } from './interface/order.interface';

const orders : Order[] = [] ;
 

@Injectable()
export class OrdersService {
    constructor( private productsService: ProductsService, private usersService: UsersService){}

    getUser(email: string) {
        return this.usersService.getOneUser(email);
       
     }
     
     productAvailable(id: number){
         return this.productsService.getOneProduct(id);
     }
    
     createOrder(order: Order) {
       
         const user = this.getUser(order.orderByEmail);
         console.log(user);
        
         const product = this.productAvailable(order.productId);
         console.log(product);
         if(user){
             if(product.msg1.isAvailable){
                 order.isDelivered = false;
                 order.isCancelled = false;
                 order.prodName = product.msg1.productName;
                 orders.push(order);
                 return orders ;
             }else{
                return 'Product is not available at the moment'
             }
         }else{
            return 'User not found'
         }
     }

     updateDeliveryStatus(id: number){
        if(orders[id].isCancelled){
            return 'Order already cancelled'
        }else{
            orders[id].isDelivered = true ;
            return{
                msg1: orders[id],
                msg2: `Order delivered successfully`
            }
           
        }
        
     }

     updateCancelStatus(id: number){
        if(orders[id].isDelivered){
           return 'Order already Delivered'
        }else{
            orders[id].isCancelled = true ;
            return{
                msg1: orders[id],
                msg2: `Order cancelled successfully`
            }
        }
        
     }
    
}
