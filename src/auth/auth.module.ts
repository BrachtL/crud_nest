// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService

@Module({
  imports: [
    UsersModule,
    ConfigModule, // Ensure ConfigModule is imported
    JwtModule.registerAsync({ // Use registerAsync to access ConfigService
      imports: [ConfigModule], // Ensure ConfigModule is imported here
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Use ConfigService to access the secret
        signOptions: { expiresIn: '10s' }, // Token expiration time
      }),
      inject: [ConfigService], // Inject ConfigService
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService], // Export AuthService if needed in other modules
})
export class AuthModule {}