import { protectedProcedure, createTRPCRouter } from "../trpc";
import z from "zod";

export const MediatorRouter = createTRPCRouter({
    getAllMediator: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.mediator.findMany();
    }),

    getMediatorByTransaction: protectedProcedure
        .input(z.string())
        .query(({ ctx, input }) => {
            return ctx.prisma.mediator.findUnique({
                where: { ID: input },
            });
        }),

    // Get mediators to pay with order
});
