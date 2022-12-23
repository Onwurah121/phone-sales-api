import { Body, Controller, Post, Get, Patch, Param } from '@nestjs/common';
import { Product } from './interface/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}
    

    @Post()
    create(@Body() production: Product){
        return this.productsService.createProduct(production)
        
    }

    @Get(":id")
    getOneProduct(@Param() params) {
        return this.productsService.getOneProduct(params.id)
    }

    @Get()
    getAllproducts() {
        return this.productsService.getAllProducts();
    }

    @Patch(':id')
    updateOneProduct(@Param() params, @Body() product) {
        return this.productsService.updateOneProduct(params.id, product);
    }
}
