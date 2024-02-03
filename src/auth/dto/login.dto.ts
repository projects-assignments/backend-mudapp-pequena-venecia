import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";
import { IsEmail } from "class-validator";

export class LoginDto {
    
    @IsEmail()
    user_email: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    user_password: string;
}