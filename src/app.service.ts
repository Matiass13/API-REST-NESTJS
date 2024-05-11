import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor(
    @Inject('PG') private clientPg: Client,
    @Inject('APIKEY') private APIKEY: string,
    @Inject('TAREA_ASINC') private tarea: string,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getEnvs(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    const port = this.configService.database.port;
    return `Llave de la app: ${apiKey}, nombre de la base de datos: ${name} y puerto: ${port}`;
  }
  getHello(): string {
    return `Llave de la app: ${this.APIKEY}`;
  }
  getUseFactory(): string {
    console.log(this.tarea);
    return 'realizando una tarea asinc de ejemplo';
  }
  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tareas', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
