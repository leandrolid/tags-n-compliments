import { TableColumn } from "typeorm";
export class AlterUsersAddColumn1629849359920 {
    async up(queryRunner) {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'password',
            type: 'varchar',
            isNullable: true
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('users', 'password');
    }
}
