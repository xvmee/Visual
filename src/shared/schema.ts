import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema for authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Bot Statistics Schema
export const botStats = pgTable("bot_stats", {
  id: serial("id").primaryKey(),
  servers: integer("servers").notNull(),
  users: integer("users").notNull(),
  commandsExecuted: integer("commands_executed").notNull(),
  uptime: text("uptime").notNull(),
});

export const insertBotStatsSchema = createInsertSchema(botStats).pick({
  servers: true,
  users: true,
  commandsExecuted: true,
  uptime: true,
});

// Feature Schema
export const features = pgTable("features", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
});

export const insertFeatureSchema = createInsertSchema(features).pick({
  name: true,
  description: true,
  icon: true,
});

// Command Schema
export const commands = pgTable("commands", {
  id: serial("id").primaryKey(),
  command: text("command").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
});

export const insertCommandSchema = createInsertSchema(commands).pick({
  command: true,
  title: true,
  description: true,
  category: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertBotStat = z.infer<typeof insertBotStatsSchema>;
export type BotStat = typeof botStats.$inferSelect;

export type InsertFeature = z.infer<typeof insertFeatureSchema>;
export type Feature = typeof features.$inferSelect;

export type InsertCommand = z.infer<typeof insertCommandSchema>;
export type Command = typeof commands.$inferSelect;
