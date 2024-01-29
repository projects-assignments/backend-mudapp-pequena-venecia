export class CreateUserDto {
    user_name: string;
    user_lastname: string;
    user_email: string;
    user_password: string;
    user_rol: string;
}





// import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

// export class CreateUserDto {
// @IsNotEmpty()
// @IsString()
// name: string;

// @IsNotEmpty()
// @IsString()
// lastname: string;

// @IsNotEmpty()
// @IsEmail()
// email: string;

// @IsNotEmpty()
// @IsString()
// password: string;

// @IsNotEmpty()
// @IsString()
// rol: string;
// }
