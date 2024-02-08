import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  phone: string;

  @Column('date')
  birthay: Date;

  @Column()
  websire: string;

  @Column()
  occupation: string;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;
}
