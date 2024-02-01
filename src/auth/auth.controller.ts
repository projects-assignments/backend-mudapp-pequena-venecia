import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto
   ) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
} }

//El controlador tecnicamente hace el return, pero solo se dedica a recibir una petición, 
//ver qué debe hacerse con esa petición, le llega una respuesta y se la manda al cliente"   
//pero es el Auth service el que se lleva el curro //
//El controller manjea las solicitudes pero delega le proceso a authservice 

//private readonly: declarar una propiedad que es privada (solo accesible dentro de la clase)