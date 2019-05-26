import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { UserTypes } from './userstype.entity';
@Entity('videoinformation')
export class Video {
@PrimaryGeneratedColumn()
videoId: number;
@Column()
videoTitle: string;
@Column()
description: string;
@Column()
videoTypesId: string;
@Column()
videoCreateDate: string;
@Column()
vidoeCreateBy: number;
}
