import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mariadb',
      host: this.configService.get('DB_HOST') || 'localhost',
      port: Number(this.configService.get('DB_PORT')) || 3306,
      username: this.configService.get('DB_USERNAME') || 'user-admin-api',
      password: this.configService.get('DB_PASSWORD') || 'user-admin-api',
      database: this.configService.get('DB_DATABASE') || 'user-admin-api',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: this.configService.get('DB_SYNCHRONIZE') ? Boolean(this.configService.get('DB_SYNCHRONIZE')) : true,
      logging: this.configService.get('DB_LOGGING') ? Boolean(this.configService.get('DB_LOGGING')) : false,
    };
  }
}
