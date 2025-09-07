import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import type { User } from 'generated/prisma';
import { GetUser } from 'src/auth/decorator';
import { jwtGuard } from 'src/auth/guard';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(jwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  //users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    console.log('userId', userId)
    return this.userService.editUser(userId, dto)
  }
}
