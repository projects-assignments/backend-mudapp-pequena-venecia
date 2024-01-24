import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 

@Module({
  imports: [ //sacado de la docu de techniques database
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', //Este es el usuario que se usa para acceder a la BD --yo lo tengo configurado como root, root--- dejar asi
      password: 'root', //Ojo con esto por seguridad no hay datos personales 
      database: 'test', // database es el nombre de la BD
      entities: [], //AQUI HAY QUE AGREGAR CADA NUEVA ENTIDAD CREADA -- OJO!!
      synchronize: true,
    }), 
     //AQUI HAY QUE REGISTRAR LOS MODULOS GENERADOS
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
