import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/* eslint-disable @typescript-eslint/no-unused-vars */
export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
