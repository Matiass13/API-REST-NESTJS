import { MigrationInterface, QueryRunner } from 'typeorm';


export class Inicio1716377337987 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(

      `ALTER TABLE "operador" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,

    );


    await queryRunner.query(

      `ALTER TABLE "operador" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,

    );

  }



  public async down(queryRunner: QueryRunner): Promise<void> {}

}

