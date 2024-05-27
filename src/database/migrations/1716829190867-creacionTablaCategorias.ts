import { MigrationInterface, QueryRunner } from 'typeorm';



export class CreacionTablaCategorias1716829190867
  implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void> {

    queryRunner.query(`CREATE TABLE "categoria"(

            "id" SERIAL PRIMARY KEY,

            "nombre" VARCHAR(255) NOT NULL,

            "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

            "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP

        )`);

  }



  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "categoria"`);
  }

}

