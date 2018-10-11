import { Module } from '@nestjs/common';
import { UserAdminApiLogger } from './user-admin-api.logger';

@Module({
  providers: [UserAdminApiLogger],
  exports: [UserAdminApiLogger],
})
export class LoggerModule {}
