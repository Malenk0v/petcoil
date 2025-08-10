import { PrismaClient } from '@prisma/client';

// In Next.js the hot reload environment may cause the Prisma Client to be
// instantiated multiple times. To avoid exhausting the database connection
// pool, we attach the client to the global object during development and
// reuse it across requests.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
