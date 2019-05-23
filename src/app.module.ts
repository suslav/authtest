import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(),AuthModule],
  controllers: [AppController],
  providers: [AppService],
  exports:[AppModule]
})
export class AppModule {}
