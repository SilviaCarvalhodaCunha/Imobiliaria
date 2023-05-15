import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTableAddresses1684129032292 implements MigrationInterface {
    name = 'FixTableAddresses1684129032292'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipdCode" TO "zipCode"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipCode" TO "zipdCode"`);
    }

}
