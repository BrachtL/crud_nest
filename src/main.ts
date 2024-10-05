import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for all origins
  app.enableCors(); // This will allow requests from all origins

  // Optionally, you can specify specific origins:
  // app.enableCors({ origin: 'http://localhost:4200' }); 

  await app.listen(3000);
}

bootstrap();