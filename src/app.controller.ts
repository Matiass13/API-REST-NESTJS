import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getEnvs();
  }
  @Get('usefactory')
  getUseFactory(): string {
    return this.appService.getUseFactory();
  }
  /*   @Get('tasks')
  tasks() {
    return this.appService.getTasks();
  } */
}
