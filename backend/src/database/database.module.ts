import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // Entities will be imported here
    ]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
