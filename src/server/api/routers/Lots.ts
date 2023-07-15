import z from "zod";

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "@server/api/trpc";

export const LotsRouter = createTRPCRouter({
    getLots: protectedProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.prisma.lot.findMany({
                where: { locationID: input },
                // Find by where lcoation ID is for the lot
            });
        }),
});
