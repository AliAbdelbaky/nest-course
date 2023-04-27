// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Req, Param } from '@nestjs/common';
import { Request } from 'express';
@Controller('users')
// eslint-disable-next-line prettier/prettier
export class UserController {
  @Get('a')
  getAll(): string[] {
    return ['ali', 'admin'];
  }

  @Post(':username')
  create(@Param() username: string): string {
    return username;
  }
}
