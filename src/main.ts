import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// app.useGlobalPipes(
//   new ValidationPipe({
//     whitelist: true,
//     forbidNonWhitelisted: true,
//     transform: true,
//   }),
// );

  await app.listen(3001);
}
bootstrap();

//SI no se cumple el request de register en el body, gracias al global pipe se obloga al sistema a usar validaciones //