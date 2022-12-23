import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [ProductsModule, UsersModule, OrdersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'phone_sales_api',
    autoLoadEntities: true,
    synchronize: true,
    logging:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
