import { MigrationInterface, QueryRunner } from 'typeorm';



export class CreacionTablaMaM1716834052609 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    queryRunner.query(

      `CREATE TABLE "categoria_productos_producto" (
            "categoriaId" INT REFERENCES categoria(id),
            "productoId" INT REFERENCES producto(id),
            PRIMARY KEY ("categoriaId", "productoId")
            )`,
    );

  }



  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE "categoria_productos_producto"`);
  }

}

