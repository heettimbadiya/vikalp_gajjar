import { pgTable, text, serial, integer, boolean, timestamp, decimal, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Products table for industrial equipment
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'crushers', 'mobile-plants', 'screening', 'washing', 'conveying', 'complete-solutions'
  subcategory: text("subcategory"), // 'jaw-crusher', 'vsi-crusher', etc.
  description: text("description").notNull(),
  capacity_min: integer("capacity_min"), // TPH minimum
  capacity_max: integer("capacity_max"), // TPH maximum
  motor_power: text("motor_power"), // kW range
  weight: decimal("weight"), // tons
  feed_opening: text("feed_opening"), // dimensions
  applications: text("applications").array(), // material types
  specifications: jsonb("specifications"), // detailed tech specs
  features: text("features").array(),
  is_featured: boolean("is_featured").default(false),
  created_at: timestamp("created_at").defaultNow(),
});

// Leads table for customer inquiries
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  phone: text("phone"),
  project_location: text("project_location"),
  query_text: text("query_text").notNull(),
  matched_products: integer("matched_products").array(),
  product_name: text("product_name"), // Associated product name
  product_slug: text("product_slug"), // Associated product slug
  status: text("status").default("new"), // 'new', 'contacted', 'qualified', 'closed'
  created_at: timestamp("created_at").defaultNow(),
});

// Product queries for search optimization
export const product_queries = pgTable("product_queries", {
  id: serial("id").primaryKey(),
  query_text: text("query_text").notNull(),
  matched_products: integer("matched_products").array(),
  query_embedding: text("query_embedding"), // vector embedding as text
  created_at: timestamp("created_at").defaultNow(),
});

// Relations
export const productsRelations = relations(products, ({ many }) => ({
  productQueries: many(product_queries),
}));

export const leadsRelations = relations(leads, ({ one, many }) => ({
  // No direct relations needed for now
}));

export const productQueriesRelations = relations(product_queries, ({ one }) => ({
  // Relations can be added later for analytics
}));

// Insert schemas
export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  created_at: true,
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  created_at: true,
  status: true,
});

export const insertProductQuerySchema = createInsertSchema(product_queries).omit({
  id: true,
  created_at: true,
});

// Types
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type ProductQuery = typeof product_queries.$inferSelect;
export type InsertProductQuery = z.infer<typeof insertProductQuerySchema>;

// Remove old user schema exports
export type User = {
  id: number;
  username: string;
  password: string;
};

export type InsertUser = {
  username: string;
  password: string;
};
