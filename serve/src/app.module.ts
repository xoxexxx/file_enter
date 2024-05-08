import { Module } from '@nestjs/common';
import { FileController } from './app.controller';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [],
})
export class AppModule {}
