import { PrimaryGeneratedColumn, Column, Entity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { UserTypes } from './userstype.entity';
@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    Ids: number;
    @Column()
    userName: string;
    @Column()
    email: string;
    @Column()
    passwords: string;
    // @OneToOne(type => UserTypes)
    // @JoinColumn()
    // usertypes: UserTypes;
     @OneToMany(type => UserTypes, usertypes => usertypes.users, { eager: true, cascade: true })
     usertypes: UserTypes[]
}
