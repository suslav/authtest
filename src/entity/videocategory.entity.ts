import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { UserTypes } from './userstype.entity';
@Entity('videocategory')

export class VideoCategory {
    @PrimaryGeneratedColumn()
    videoCategoryId: number;
    @Column()
    videoCategoryName: string;
}
