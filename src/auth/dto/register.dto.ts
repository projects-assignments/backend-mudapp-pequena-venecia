import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength,  minLength,  } from "class-validator";

export class RegisterDto{

    @IsString()
    user_name: string;

    @IsString()
    user_lastname: string;

    @IsEmail()
    user_email: string;
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    user_password: string;

    @IsString()
    user_rol: string; 
}
