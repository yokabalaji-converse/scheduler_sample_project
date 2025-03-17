import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hello } from './hello.entity';
import { HelloService } from './hello.service';
import { HelloScheduler } from './hello.scheduler';
import { HelloController } from './hello.controller';
import { SchedulerController } from './hello.scheduler.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Hello])],
  providers: [HelloService, HelloScheduler],
  controllers: [HelloController, SchedulerController],
})
export class HelloModule {}
