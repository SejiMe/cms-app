import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const lots = await prisma.lot.upsert({
        update: {},
        create: {
            Deceased: {
                create: {
                    DateBorn: "02-26-1994",
                    DateDied: "03-21-2022",
                    FirstName: 'Braulio Marco'
                , LastName: ''
                },
            },
        },
    });
}
