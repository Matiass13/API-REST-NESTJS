import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './ambiente';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';
import config from './config';
import * as Joi from 'joi';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      // Implementación
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    OperadoresModule,
    ProductosModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TAREA_ASINC',
      useFactory: async (http: HttpService) => {
        const req = http.get('https://jsonplaceholder.typicode.com/posts');
        const tarea = await lastValueFrom(req);

        return tarea.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
