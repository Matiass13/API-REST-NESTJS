import { MigrationInterface, QueryRunner } from 'typeorm';



export class ActualizacionTablaOperador1716498204752
  implements MigrationInterface
{

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`ALTER TABLE "operador" ADD "compradorid" INT`);



    await queryRunner.query(

      `ALTER TABLE "operador" ADD CONSTRAINT fk_compradorid FOREIGN KEY (compradorid) REFERENCES comprador`,

    );

  }



  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`ALTER TABLE "operador" DROP "compradorid"`);

  }

}

