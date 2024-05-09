import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject('APIKEY') private APIKEY: string,
    @Inject('TAREA_ASINC') private tarea: string,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getEnvs(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    return `Envs: ${apiKey} ${name}`;
  }
  getHello(): string {
    return `Llave de la app: ${this.APIKEY}`;
  }
  getUseFactory(): string {
    console.log(this.tarea);
    return 'realizando una tarea asinc de ejemplo';
  }
}
