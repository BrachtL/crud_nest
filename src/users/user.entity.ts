import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ type: 'text' })
  password_hash: string;

  @Column({ type: 'date' })
  birthdate: Date;

  @Column({ default: false })
  is_manager: boolean;

  @Column({ nullable: true })
  profile_pic_url: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creation_datetime: Date;

  @Column({ nullable: true })
  firebase_token: string;

  @Column({ nullable: true })
  image_public_id: string;
}