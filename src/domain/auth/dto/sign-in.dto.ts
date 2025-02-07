import { IsEmail, IsNotEmpty } from "class-validator";

export class SignInDto{
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsEmail()
    @IsNotEmpty()
    password:string
}