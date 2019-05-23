import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { UserTypes } from './userstype.entity';
@Entity('users')
export class Users{
    @PrimaryGeneratedColumn()
    Ids:number;
    @Column()
    userName:string;
    @Column()
    email:string;
    @Column()
    passwords:string;
    @OneToMany(type=>UserTypes,usertypes=>usertypes.users)
    usertypes:UserTypes[]
}