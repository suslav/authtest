import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from './users.entity';

@Entity('userTypes')
export class UserTypes{
@PrimaryGeneratedColumn()
userTypeId:number;
@Column()
userTypeName:string;

@ManyToOne(type =>Users, users=>users.usertypes)
users:Users;
}