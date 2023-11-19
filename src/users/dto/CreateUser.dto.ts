import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  readonly username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}