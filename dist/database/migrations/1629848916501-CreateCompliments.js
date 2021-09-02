import { Table } from "typeorm";
export class CreateCompliments1629848916501 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'compliments',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'user_sender',
                    type: 'uuid',
                },
                {
                    name: 'user_receiver',
                    type: 'uuid',
                },
                {
                    name: 'tag_id',
                    type: 'uuid',
                },
                {
                    name: 'message',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
            foreignKeys: [
                {
                    name: 'FKUserSenderCompliments',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_sender'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL'
                },
                {
                    name: 'FKUserReceiverCompliments',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_receiver'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL'
                },
                {
                    name: 'FKTagsCompliments',
                    referencedTableName: 'tags',
                    referencedColumnNames: ['id'],
                    columnNames: ['tag_id'],
                    onDelete: 'SET NULL',
                    onUpdate: 'SET NULL'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('compliments');
    }
}
