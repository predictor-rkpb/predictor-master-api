import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // create a teams table
    await knex.schema.createTable('teams', (table) => {
        table.uuid('id').primary().defaultTo(knex.fn.uuid())
        table.string('name')
        table.string('shortName')
        table.string('logo')
    })
}


export async function down(knex: Knex): Promise<void> {
    // drop the teams table
    await knex.schema.dropTable('teams')
}

