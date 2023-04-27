// eslint-disable-next-line prettier/prettier
import { Controller,Get } from '@nestjs/common';
@Controller('users')
// eslint-disable-next-line prettier/prettier
export class UserController {
  @Get('a')
  getAll(): string[] {
    return ['ali', 'admin'];
  }
}
