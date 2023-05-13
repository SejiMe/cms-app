/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createStyles, Code, getStylesRef, rem } from "@mantine/core";
import {} from "@tabler/icons-react";
import { MantineLogo } from "@mantine/ds";
const HEADER_HEIGHT = rem(60);

export const useHeaderStyles = createStyles((theme) => ({
    headerMenu: {
        height: rem(100),
    },
    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
    groupHiddenMenu: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },
    link: {
        display: "block",
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },

        [theme.fn.smallerThan("sm")]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },
    dropdown: {
        position: "absolute",
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        backgroundColor: "#a4dda4",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
}));

export const useSidebarStyles = createStyles((theme) => ({
    navbar: {
        display: "flex",
        paddingTop: theme.spacing.lg,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(2)} solid ${theme.colors.newGreen[8]}`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.xs,
        fontWeight: 500,

        "&:hover": {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: "filled",
                    color: theme.colors.green[4],
                }).background!,
                0.8
            ),
        },
    },

    linkIcon: {
        ref: getStylesRef("icon"),
        opacity: 0.75,
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.lighten(
                theme.colors.green[8],
                0.15
            ),
            color: theme.white,
            [`& .${getStylesRef("icon")}`]: {
                opacity: 0.9,
                color: theme.white,
            },
        },
    },
}));

export const baseStyles = createStyles((theme) => ({}));

export const usePortalLayoutStyles = createStyles((theme) => ({
    version: {
        marginRight: `calc(${theme.spacing.md} * 1)`,
        fontWeight: 700,
    },

    header: {
        paddingBottom: theme.spacing.md,
        borderBottom: `${rem(2)} solid ${theme.colors.teal[8]}`,
    },
}));
