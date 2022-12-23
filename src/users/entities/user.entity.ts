import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../interfaces/user.interface";

@Entity({ name: 'users'})
export class UserEntity implements User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    name: string

    @Column()
    password: string;
}