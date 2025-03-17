import { Controller, Post, Body } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Post()
  addMessage(@Body('message') message: string) {
    return this.helloService.addMessage(message);
  }
}
