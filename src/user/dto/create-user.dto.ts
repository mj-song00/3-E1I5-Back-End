import { ApiProperty } from '@nestjs/swagger';
import { match } from 'assert';
import { Equals, equals, IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @ApiProperty({ example: '1118@email.com', description: '이메일', required: true })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z\d!@#$%^&*()]{8,12}$/, {
    message: '비밀번호는 소문자, 특수문자 및 숫자를 모두 포함한 8자리 이상 12자리 이하여야 합니다.',
  })
  @ApiProperty({ example: 'abcd1234#', description: '비밀번호', required: true })
  readonly password: string;

  @IsNotEmpty()
  @match('password')
  @ApiProperty({
    example: 'abcd1234#',
    description: '비밀번호 확인',
    required: true,
  })
  readonly confirmPassword: string;
}
