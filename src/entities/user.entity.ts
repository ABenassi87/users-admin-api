import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, nullable: false, unique: true })
  email: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
  isEnabled: boolean;
  password: string;
  pin?: string;
  activatedAccountHash?: string;
  passwordUpdateRequired: boolean;
  pinUpdateRequired: boolean;
  createdDate: Date;
  activatedDate?: Date;
  disabledDate?: Date;
  enabledDate: Date;
  lastPasswordResetDate?: Date;
}
