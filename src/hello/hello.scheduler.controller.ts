import { Controller, Get } from '@nestjs/common';
import { HelloScheduler } from './hello.scheduler';

@Controller('scheduler')
export class SchedulerController {
  constructor(private readonly helloScheduler: HelloScheduler) {}

  @Get('stop')
  stopCron() {
    this.helloScheduler.stopCron();
    return { message: 'Cron job stopped!' };
  }

  @Get('start')
  startCron() {
    this.helloScheduler.startCron();
    return { message: 'Cron job started!' };
  }
}
