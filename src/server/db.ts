import { PrismaClient } from "@prisma/client";
import { env } from "~/env";
import path from "path";

const getDatabaseUrl = () => {
  if (env.DATABASE_URL.startsWith("file:./")) {
    const relativePath = env.DATABASE_URL.replace("file:./", "");
    return `file:${path.join(process.cwd(), relativePath)}`;
  }
  return env.DATABASE_URL;
};

const createPrismaClient = () =>
  new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
    log: env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
