import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const createTeam = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const teamId = await ctx.db.insert("teams", {
      name: args.name,
      createdBy: userId,
      members: [userId],
      createdAt: Date.now(),
    });

    return teamId;
  },
});

export const getUserTeams = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return [];
    }

    const teams = await ctx.db
      .query("teams")
      .withIndex("by_creator", (q) => q.eq("createdBy", userId))
      .collect();

    return teams;
  },
});
