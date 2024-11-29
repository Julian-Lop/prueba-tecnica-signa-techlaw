import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const trademarkRegistration = sqliteTable('trademark_registration', {
  id: integer('id').primaryKey(),
  brand: text('brand').notNull(),
  owner: text('owner').notNull(),
  status: text('status').notNull().default('active'),
});
