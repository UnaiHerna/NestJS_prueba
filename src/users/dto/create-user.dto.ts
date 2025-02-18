import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
	@IsString()
	@MinLength(1)
	name: string;

	@IsPhoneNumber('ES')
	@MinLength(9)
	phone: string;

	@IsEmail()
	email: string;

	@IsNotEmpty()
	@MinLength(6)
	password: string;

}