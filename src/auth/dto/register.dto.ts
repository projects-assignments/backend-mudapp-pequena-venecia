import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength,  minLength,  } from "class-validator";

export class RegisterDto{

    @IsString()
    user_name: string;

    @IsEmail()
    user_mail: string;
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(10)
    user_password: string;

    @IsString()
    user_rol: string; 
}

//transform con el Value.trim limpia los caracteres en blanco y asi no permite que alguien
//ingrese caracteres vacíos. 