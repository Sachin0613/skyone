import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  teams: defineTable({
    name: v.string(),
    createdBy: v.id("users"),
    members: v.array(v.id("users")),
    createdAt: v.number(),
  }).index("by_creator", ["createdBy"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
