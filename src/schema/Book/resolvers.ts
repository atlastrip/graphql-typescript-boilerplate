import { Context } from '@config/context';
import type { Resolvers } from '@generated/types';

// Provide resolver functions for your schema fields
export const resolvers: Resolvers<Context> = {
  Query: {
    books: (parent, args, ctx, info) => [
      {
        title: 'The Awakening',
        author: 'Kate Chopin',
      },
      {
        title: 'City of Glass',
        author: 'Paul Auster',
      },
    ],
  },
};
