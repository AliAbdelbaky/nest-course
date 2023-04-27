import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
@Module({
  // eslint-disable-next-line prettier/prettier
  imports: [UserModule],
})
// eslint-disable-next-line prettier/prettier
export class AppModule {}
