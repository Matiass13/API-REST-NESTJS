import { MigrationInterface, QueryRunner } from "typeorm";



export class CreacionTablaComprador1716493685516 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(

      `CREATE TABLE "comprador"(

                "id" SERIAL PRIMARY KEY,

                "nombre" VARCHAR(255) NOT NULL,

                "apellido" VARCHAR(255) NOT NULL,

                "telefono" VARCHAR(255) NOT NULL,

                "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,

                "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`,

    );

  }



  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "comprador"`);
    
    await queryRunner.query(
      `ALTER TABLE "operador" DROP CONSTRAINT fk_compradorid FOREIGN KEY (compradorid)`,
    );

  }

}

