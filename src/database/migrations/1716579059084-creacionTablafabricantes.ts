import { MigrationInterface, QueryRunner } from "typeorm";

export class CreacionTablafabricantes1716579059084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(

            `CREATE TABLE "fabricante"(
      
                      "id" SERIAL PRIMARY KEY,
      
                      "nombre" VARCHAR(255) NOT NULL,
      
                      "direccion" VARCHAR(255) NOT NULL,
      
                      "email" VARCHAR(255) NOT NULL,

                      "image" VARCHAR(255) NOT NULL,
      
                      "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      
                      "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
                  )`,

      
          );
    await queryRunner.query(`ALTER TABLE "producto" ADD "fabricanteid" INT`);

    await queryRunner.query(

      `ALTER TABLE "producto" ADD CONSTRAINT fk_fabricanteid FOREIGN KEY (fabricanteid) REFERENCES fabricante`,

    );

    }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`DROP TABLE "fabricante"`);
    await queryRunner.query(`ALTER TABLE "producto" DROP "fabricanteid"`);
    await queryRunner.query(
      `ALTER TABLE "producto" DROP CONSTRAINT fk_fabricanteid`,
    );

    }

}
