import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from './users.entity';

@Entity('userTypes')
export class UserTypes {
    @PrimaryGeneratedColumn()
    Ids: number;
    @Column()
    userTypeId: number;
    @ManyToOne(type => Users, users => users.usertypes)
    users: Users;
}
