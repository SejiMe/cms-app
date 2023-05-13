import React, { SetStateAction, useEffect, useState } from "react";
import { LayoutProps } from "./PublicLayout";

import {
    useHeaderStyles,
    usePortalLayoutStyles,
    useSidebarStyles,
} from "../emotion/styles";

import {
    Container,
    Group,
    Code,
    AppShell,
    Header,
    Text,
    useMantineTheme,
    Navbar,
    Loader,
    MediaQuery,
    Burger,
    Box,
} from "@mantine/core";
import { useRouter } from "next/router";
import { PortalLinks } from "constants/constantLinks";
import CustomLink from "../custom/links/CustomLink";
import {
    IconLogout,
    IconSwitchHorizontal,
} from "@tabler/icons-react";

const PortalLayout = ({ children }: LayoutProps) => {
    const [loading, setLoading] = useState(false);
    const [opened, setOpened] = useState(false);
    const router = useRouter();
    const theme = useMantineTheme();
    const handleTrue = () => {
        setLoading(true);
    };
    const handleFalse = () => {
        setLoading(false);
    };

    useEffect(() => {
        router.events.on("routeChangeStart", handleTrue);
        router.events.on("routeChangeError", handleFalse);
        router.events.on("routeChangeComplete", handleFalse);

        console.log(loading);
        return () => {
            router.events.off("routeChangeError", handleTrue);
            router.events.off("routeChangeError", handleFalse);
            router.events.off("routeChangeComplete", handleFalse);
            console.log(loading);
        };
    });

    return (
        <AppShell
            fixed
            navbarOffsetBreakpoint='sm'
            asideOffsetBreakpoint='sm'
            navbar={<PortalMenu isOpen={opened} />}
            header={
                <HeaderPortal
                    isOpen={opened}
                    setOpen={setOpened}
                />
            }
            aside={<PortalSidebar />}
        >
            <Box
                p={'md'}
                className='h-full w-full rounded-sm shadow-lg'
                sx={{ backgroundColor: theme.colors.darkGreen[8] }}
            >
                {loading ? (
                    <Loader
                        variant='dots'
                        color='cyan'
                    />
                ) : (
                    children
                )}
            </Box>
        </AppShell>
    );
};

export default PortalLayout;

const PortalMenu = ({ isOpen }: { isOpen: boolean }): JSX.Element => {
    const { classes, cx } = useSidebarStyles();
    const [active, setActive] = useState("/portal/dashboard");
    const router = useRouter();
    const links = PortalLinks.map((item) => (
        <CustomLink
            className={cx(classes.link, {
                [classes.linkActive]: router.asPath === item.url,
            })}
            href={item.url}
            key={item.label}
            onClick={(event) => {
                setActive(item.label);
            }}
        >
            <item.icon
                className={classes.linkIcon}
                stroke={1.5}
            />
            <span>{item.label}</span>
        </CustomLink>
    ));
    return (
        <Navbar
            p={"lg"}
            hiddenBreakpoint={"sm"}
            hidden={!isOpen}
            width={{ sm: 200, lg: 300 }}
        >
            <h1>Links Here</h1>
        </Navbar>
    );
};

function HeaderPortal({
    isOpen,
    setOpen,
}: {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { classes, cx } = usePortalLayoutStyles();
    const theme = useMantineTheme();
    return (
        <Header
            height={60}
            className={classes.header}
        >
            <div className='flex h-full items-center  justify-between'>
                <Group position='apart'>
                    <Text
                        sx={{
                            marginLeft: `0.4rem`,
                            fontFamily: "sans-serif",
                            fontWeight: 600,
                        }}
                    >
                        CMS APP
                    </Text>
                    <Code className={classes.version}>v3.1.2</Code>
                </Group>
                <MediaQuery
                    largerThan='sm'
                    styles={{ display: "none" }}
                >
                    <Burger
                        opened={isOpen}
                        onClick={() => setOpen((o) => !o)}
                        size='sm'
                        color={theme.colors.gray[6]}
                        mr='xl'
                    />
                </MediaQuery>
            </div>
        </Header>
    );
}

function PortalSidebar() {
    const { classes, cx } = useSidebarStyles();
    const [active, setActive] = useState("Dashboard");
    const router = useRouter();

    const links = PortalLinks.map((item) => (
        <CustomLink
            className={cx(classes.link, {
                [classes.linkActive]: router.asPath === item.url,
            })}
            href={item.url}
            key={item.label}
            onClick={(event) => {
                setActive(item.label);
            }}
        >
            <item.icon
                className={classes.linkIcon}
                stroke={1.5}
            />
            <span>{item.label}</span>
        </CustomLink>
    ));
    return (
        <Navbar
            hiddenBreakpoint='sm'
            hidden
            position={{ bottom: 0, left: 0, top: 0 }}
            className={classes.navbar}
            width={{ sm: 250, md: 280, lg: 300 }}
        >
            <Navbar.Section grow>{links}</Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <CustomLink
                    href='#'
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconSwitchHorizontal
                        className={classes.linkIcon}
                        stroke={1.5}
                    />
                    Change account
                </CustomLink>

                <a
                    href='#'
                    className={classes.link}
                    onClick={(event) => event.preventDefault()}
                >
                    <IconLogout
                        className={classes.linkIcon}
                        stroke={1.5}
                    />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    );
}
