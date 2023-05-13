import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "@server/api/trpc";
import { z } from "zod";

export const usersRouter = createTRPCRouter({
    getUser: publicProcedure
        .input(
            z.object({ username: z.string(), password: z.string() })
        )
        .query(({ ctx, input }) => {
            const res = ctx.prisma.user.findFirst({
                where: {
                    AND: [
                        { username: {equals: input.username} },
                        { password: {equals: input.password} },
                    ],
                },
            });
            return res;
        }),
    getUsers: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findMany();
    }),
    updateUsername: protectedProcedure
        .input(z.object({ username: z.string(), email: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.user.update({
                where: { email: input.email },
                data: { username: input.username },
            });
        }),
    updateUserPassword: protectedProcedure
        .input(z.object({ password: z.string(), email: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.user.update({
                where: { email: input.email },
                data: { password: input.password },
            });
        }),
});
