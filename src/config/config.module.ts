import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

const configFile = process.env.NODE_ENV || 'development';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(`${configFile}.env`),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
