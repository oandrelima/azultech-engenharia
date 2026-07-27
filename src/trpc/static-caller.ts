/**
 * Caller estático do tRPC — para uso em generateStaticParams e outros contextos sem request.
 * Não usa headers(), então é seguro fora de request scope.
 */
import { createCaller } from "~/server/api/root";
import { db } from "~/server/db";

export const staticCaller = createCaller(async () => ({
  db,
  headers: new Headers(),
}));
