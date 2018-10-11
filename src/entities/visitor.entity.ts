import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('visitors')
export class Visitor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50, nullable: false })
  ip: string;
  @Column({ length: 100, nullable: false })
  browser: string;
  @CreateDateColumn({ nullable: false })
  accessDate: Date;
  @Column({ nullable: true })
  countryCode?: string;
  @Column({ nullable: true })
  countryName?: string;
  @Column({ nullable: true })
  regionCode?: string;
  @Column({ nullable: true })
  regionName?: string;
  @Column({ nullable: true })
  city?: string;
  @Column({ nullable: true })
  zipCide?: string;
  @Column({ nullable: true })
  timeZone?: string;
  @Column({ type: 'double', nullable: true })
  latitude?: number;
  @Column({ type: 'double', nullable: true })
  longitude?: number;
}
