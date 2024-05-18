import { Global, Module } from '@nestjs/common';
import { Client } from 'pg';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'my_db',
  password: '123456',
  port: 5432,
});

client.connect();
client.query('SELECT * FROM tareas', (err, res) => {
  console.error(err);
  console.log(res.rows);
});
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        //const { user, host, dbName, password, port } = configService.mysql;
        return {
          type: 'postgres',
          //type: 'mysql',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'APIKEY',
      useValue: process.env.NODE_ENV === 'prod',
    },
    {
      provide: 'PG',
      useValue: client,
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['APIKEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
