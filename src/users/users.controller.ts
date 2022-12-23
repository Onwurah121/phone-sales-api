import { Controller, Post, Put, Get, Body, Param } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() user: User) {
        return this.usersService.createUser(user);
    }

    @Put(':id')
    updateOneUser(@Param() params, @Body() user) {
        return this.usersService.updateOneUser(params.id, user);
    }

    @Get(':email')
    getOneUser(@Param() params){
        return this.usersService.getOneUser(params.email);
    }

}
