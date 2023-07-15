import PortalLayout from "@/components/layouts/PortalLayout";

import React from "react";
import { Grid, Box, rem, Button } from "@mantine/core";
import CustomLink from "@/components/custom/links/CustomLink";
import { cemeteryLink } from "constants/constantLinks";

const Cemetery = () => {
    return (
        <PortalLayout>
            <h1>Cemetery Records</h1>
            <Box className='h-full'>
                <Grid
                    className='h-full'
                    justify='normal'
                    columns={12}
                    gutter={10}
                    grow
                >
                    {cemeteryLink.map((url, index) => (
                        <GridCol
                            key={index}
                            span={
                                index === 0 ||
                                index === cemeteryLink.length - 1
                                    ? 10
                                    : 2
                            }
                            url={url.url}
                            label={url.label}
                        />
                    ))}
                </Grid>
            </Box>
        </PortalLayout>
    );
};

type GridCol = {
    span?: number;
    className?: string;
    url: string;
    label: string;
};

const GridCol = ({ span, className, url, label }: GridCol) => {
    return (
        <Grid.Col
            span={span}
            style={{
                minHeight: rem(10),
                width: "100%",
                alignItems: "center",
            }}
            className='m-1 rounded-lg  shadow-lg'
        >
            <CustomLink
                className='flex h-full w-full items-center rounded bg-gray-900'
                href={url}
            >
                <span className=' flex w-full  content-center justify-center text-center'>
                    {label}
                </span>
            </CustomLink>
        </Grid.Col>
    );
};

export default Cemetery;
