import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { User } from "./interfaces/user.interface";

const users : User[] = [];

@Injectable()
export class UsersService { 
    constructor(@InjectRepository(UserEntity) private readonly usersRepo:Repository<UserEntity>){}

   createUser(user:User) {
    return this.usersRepo.save(user);
    // if(users.length === 0){
    //     user.id = users.length
    //     users.push(user);
    //     return users ;
    // }else{
    //     const oneUser = users.find((u) => user.email === u.email) ;
    //     if(oneUser){
    //         return 'User already exists'
    //     }else{
    //         user.id = users.length;
    //         users.push(user);
    //         return users;
    //     }
    // }    
   }

   updateOneUser(id, user){
    if(users[id]){
        users[id] = {
            "name" : user.name || users[id].name,
            "id": users[id].id,
            "email": user.email || users[id].email,
            "password":user.password || users[id].password
        }
        return {
            msg: users[id],
            msg1: "User Data updated successfully"
        };
    }else{
        return "User not found" ;
    }
   }

   getOneUser(email) {
    const userIndex = users.findIndex((u) => u.email === email);
    console.log(userIndex);
    if(users[userIndex]){
        return users[userIndex] ;
    }
   }
}
