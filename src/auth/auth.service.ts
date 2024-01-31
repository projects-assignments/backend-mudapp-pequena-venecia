import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService) {}

    //primer userService es minuscula porque es la variable que almacena los metodos//

register(){
    return 'register';
}
login(){
    return 'login';
}
}

//Es este auth service el que se debe conectar con nuestro users aka otro modulo y utilizar el otro servicio userservice, porque ahi esta el create y findone)//
//El authservice tiene que traerse todos los metodos que tiene el user service, para eso es necesario inyectarlo en el constructor//
