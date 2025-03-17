import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hello } from './hello.entity';

@Injectable()
export class HelloService {
  constructor(
    @InjectRepository(Hello)
    private helloRepository: Repository<Hello>,
  ) {}

  async addMessage(message: string): Promise<Hello> {
    const hello = this.helloRepository.create({ message });
    return this.helloRepository.save(hello);
  }

  async getAllMessages(): Promise<Hello[]> {
    return this.helloRepository.find();
  }
}
