// Mock database for development
import * as schema from "./shared/schema";

// Create a mock database interface for development
export const db = {
  select: () => ({
    from: () => ({
      orderBy: () => ({
        limit: () => Promise.resolve([]),
        where: () => Promise.resolve([]),
      }),
      where: () => ({
        orderBy: () => Promise.resolve([]),
      }),
    }),
  }),
  insert: () => ({
    values: () => ({
      returning: () => Promise.resolve([{}]),
    }),
  }),
  update: () => ({
    set: () => ({
      where: () => ({
        returning: () => Promise.resolve([{}]),
      }),
    }),
  }),
};