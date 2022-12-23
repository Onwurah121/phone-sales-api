import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from 'src/products/products.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [OrdersController],
  providers: [OrdersService, UsersService, ProductsService]
})
export class OrdersModule {}
