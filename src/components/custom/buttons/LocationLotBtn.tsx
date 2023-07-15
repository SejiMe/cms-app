import React from "react";

import {
    HoverCard,
    Badge,
    Button,
    Text,
    Group,
    Modal,
    Grid,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { prisma } from "@/server/db";

export interface TileProps {
    className?: string;
    buttonContent: string;
    numberOfOccupants?: number;
    numberOfDeceased?: number;
    numberOfMediators?: number;
    numberOfLotsPerRow: number;
}

const LocationLotBtn = ({
    buttonContent,
    numberOfOccupants = 0,
    numberOfDeceased = 0,
    numberOfMediators = 0,
    numberOfLotsPerRow = 0,
}: TileProps) => {
    const [isOpen, { close, open }] = useDisclosure(false);

    const matches = useMediaQuery("(max-width: 60em)", true, {
        getInitialValueInEffect: false,
    });

    // const {data as locationData} =

    return (
        <>
            <HoverCard
                width={250}
                shadow='md'
                withArrow
            >
                <HoverCard.Target>
                    {/* <div className='group relative stroke-slate-400 shadow-lg'>
                        <h3 className='absolute top-0 left-0 right-0 bottom-0  p-2 font-mono text-sm text-white'>
                            Family Garcia
                        </h3>
                        <Tile className='fill-orange-300 transition-colors duration-500 ease-in group-hover:fill-slate-800' />
                    </div> */}
                    <Button
                        onClick={open}
                        className='h-20 w-full bg-slate-400 text-2xl hover:text-yellow-500'
                    >
                        <Text truncate>{buttonContent}</Text>
                    </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    {matches ? (
                        <Group
                            align='center'
                            grow
                            className='justify-center'
                        >
                            <Badge
                                color={matches ? "teal" : "red"}
                                variant='filled'
                            >
                                {buttonContent}
                            </Badge>
                        </Group>
                    ) : null}

                    <Group
                        className='w-full justify-center'
                        position='center'
                        spacing='md'
                        grow
                    >
                        <Text align='end'>Occupants :</Text>
                        <Text align='center'>
                            {numberOfOccupants}
                        </Text>
                    </Group>
                    <Group
                        className='w-full justify-center'
                        position='center'
                        spacing='md'
                        grow
                    >
                        <Text align='end'>Mediators :</Text>
                        <Text align='center'>
                            {numberOfMediators}
                        </Text>
                    </Group>
                    <Group
                        position='center'
                        spacing='md'
                        grow
                    >
                        <Text align='end'>Deceased :</Text>
                        <Text align='center'>{numberOfDeceased}</Text>
                    </Group>
                </HoverCard.Dropdown>
            </HoverCard>
            <Modal
                centered
                opened={isOpen}
                onClose={close}
                title={buttonContent}
            >
                <Grid columns={numberOfLotsPerRow}>
                    <Grid.Col>
                        <h1>Hello</h1>
                    </Grid.Col>
                </Grid>
            </Modal>
        </>
    );
};

export default LocationLotBtn;
