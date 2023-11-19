import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}