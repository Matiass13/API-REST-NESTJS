import { MigrationInterface, QueryRunner } from 'typeorm';



export class Migrations1716244695600 implements MigrationInterface {
  name?: string;
  transaction?: boolean;
  down(queryRunner: QueryRunner): Promise<any> {
    throw new Error('Method not implemented.');
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "operador" ADD "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT`,
    );
  }

  /* public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(``);

  } */

}

