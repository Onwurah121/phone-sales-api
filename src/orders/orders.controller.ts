import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { Order } from './interface/order.interface';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService) {}

    @Post()
    createOrder(@Body() order: Order) {
        console.log(order);
        return this.ordersService.createOrder(order);
    }

    @Patch('/cancel/:id')
    updateCancelOrder(@Param('id') id: number){
        return this.ordersService.updateCancelStatus(id);
    }

    @Patch('/deliver/:id')
    updateDeliverOrder(@Param('id') id:number){
        return this.ordersService.updateDeliveryStatus(id);
    }
}
