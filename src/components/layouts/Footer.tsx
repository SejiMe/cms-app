import React, { Children } from "react";
import CustomLink from "../custom/links/CustomLink";
import FBSVG from "~svg/FBSVG.svg";
import clsx from "clsx";
import { useSession, signIn } from "next-auth/react";

const Footer = (): JSX.Element => {
    const { data: sessionData } = useSession();
    return (
        <footer className='bg-[#b4ffcd]'>
            <div>
                <h1>JRG Anao Memorial</h1>
            </div>
            <div className='grid grid-flow-col'>
                <div>
                    <h3>Socials</h3>
                    <ul>
                        <li>
                            <CustomLink href='https://www.facebook.com/profile.php?id=100067471561099'>
                                <FBSVG className='h-14 w-14 fill-blue-500' />
                            </CustomLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Links</h3>
                    <ul className='flex text-[#887e7e]'>
                        <ListItem>
                            <CustomLink href='/'>Home</CustomLink>
                        </ListItem>
                        <ListItem>
                            <CustomLink href='/prices'>
                                Prices
                            </CustomLink>
                        </ListItem>
                        <ListItem>
                            <CustomLink href='/partners'>
                                Partners
                            </CustomLink>
                        </ListItem>
                        {sessionData ? null : (
                            <ListItem>
                                <button
                                    type='button'
                                    className=''
                                    onClick={() =>
                                        void signIn("google", {
                                            callbackUrl:
                                                process.env.URL ||
                                                "http://localhost:3000",
                                        })
                                    }
                                >
                                    Login
                                </button>
                            </ListItem>
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

type ListItemProps = {
    children?: React.ReactElement;
    className?: string;
};
const ListItem = ({ children, className }: ListItemProps) => {
    return (
        <li className={clsx("mr-2", { className })}>{children}</li>
    );
};

export default Footer;
