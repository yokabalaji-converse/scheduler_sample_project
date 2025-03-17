import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CronJob } from 'cron';
import { HelloService } from './hello.service';

@Injectable()
export class HelloScheduler implements OnModuleInit {
  private readonly logger = new Logger(HelloScheduler.name);
  private cronJob: CronJob;

  constructor(private readonly helloService: HelloService) {}

  onModuleInit() {
    this.cronJob = new CronJob('*/10 * * * * *', async () => {
      this.logger.log('handleCron called');

      const messages = await this.helloService.getAllMessages();
      messages.forEach((msg) => this.logger.log(`Message: ${msg.message}`));

      if (messages.length === 0) {
        this.logger.warn('No messages found!');
      }
    });

    this.cronJob.start(); // Start cron when the service initializes
    this.logger.log('Cron job started!');
  }

  stopCron() {
    if (this.cronJob.running) {
      this.cronJob.stop();
      this.logger.warn('Cron job stopped!');
    }
  }

  startCron() {
    if (!this.cronJob.running) {
      this.cronJob.start();
      this.logger.log('Cron job started!');
    }
  }
}
