import React, { useState } from "react";
import CustomLink from "../custom/links/CustomLink";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "@/utils/api";
import { Links } from "constants/constantLinks";
import Image from "next/image";
import clsx from "clsx";
import { clsxm } from "@/utils/merge";

import { useDisclosure } from "@mantine/hooks";
import BaseButton from "../custom/buttons/BaseButton";
import {
    Avatar,
    Burger,
    Button,
    Menu,
    createStyles,
    rem,
    Text,
    Box,
    Header as Head,
    Group,
    Tabs,
    Transition,
    UnstyledButton,
    Paper,
} from "@mantine/core";

import { useHeaderStyles } from "../emotion/styles";
import { link } from "fs";
import { useRouter } from "next/router";

// type Props = {};

const useStyles = createStyles((theme) => ({}));

interface HeaderProps {
    links: { url: string; label: string }[];
}

const Header = ({ links }: HeaderProps): JSX.Element => {
    const { data: sessionData } = useSession();
    const [openUser, setOpenUser] = useState<boolean>(false);
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const [isOpen, { toggle }] = useDisclosure(false);
    const { classes, cx } = useHeaderStyles();
    const router = useRouter();

    /* `const dropdownLinks` is creating an array of `CustomLink` components by mapping over the
    `Links` array and passing each link's `url`, `label`, and other props to the `CustomLink`
    component. The `className` prop is being set conditionally based on whether the link is
    currently active or not. The `onClick` prop is preventing the default link behavior, setting the
    active link, and closing the dropdown menu. */
    const UnwrappedLinks = Links.map((link, index) => (
        <CustomLink
            href={link.url}
            key={index}
            className={cx(classes.link, {
                [classes.linkActive]: router.asPath === link.url,
            })}
        >
            {link.label}
        </CustomLink>
    ));

    return (
        <Head
            height={60}
            className={clsx("flex justify-between")}
        >
            <Group className={clsx("flex w-full justify-between")}>
                <Box></Box>
                <Group className={classes.groupHiddenMenu}>
                    {UnwrappedLinks}
                    {sessionData ? (
                        <Menu>
                            <Menu.Target>
                                <UnstyledButton>
                                    <Group>
                                        <Avatar />
                                        <Text>
                                            Hello!{" "}
                                            {sessionData.user.name}
                                        </Text>
                                    </Group>
                                </UnstyledButton>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item>
                                    <CustomLink href="/portal">
                                        Manage
                                    </CustomLink>
                                </Menu.Item>
                                <Menu.Item
                                    onClick={() => void signOut()}
                                >
                                    Sign Out
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    ) : (
                        <></>
                    )}
                </Group>
                <Burger
                    opened={isOpen}
                    onClick={toggle}
                    className={classes.burger}
                />
            </Group>
            <Transition
                transition={"slide-left"}
                duration={400}
                mounted={isOpen}
            >
                {(styles) => (
                    <Paper
                        className={classes.dropdown}
                        style={styles}
                    >
                        {UnwrappedLinks}
                    </Paper>
                )}
            </Transition>
        </Head>
    );
};

export default Header;

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <p className='ml-2 text-center text-2xl text-black'>
                {sessionData && (
                    <span>Logged in as {sessionData.user?.name}</span>
                )}
            </p>
            <button
                className='rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-white/20'
                onClick={
                    sessionData
                        ? () => void signOut()
                        : () => void signIn()
                }
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};
