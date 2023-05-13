import { clsxm } from "@/utils/merge";
import React from "react";
import Header from "@layout/Header";
import Footer from "./Footer";
import { useSession } from "next-auth/react";
import { Links } from "constants/constantLinks";

export interface LayoutProps {
    children: React.ReactNode;
    classname?: string;
}

const PublicLayout = ({
    children,
    classname,
}: LayoutProps): JSX.Element => {
    const { data: sessionData } = useSession();
    const user = {
        name: sessionData?.user.name,
        image: sessionData?.user.image,
    };
    return (
        <>
            <Header links={Links} />
            <main
                className={clsxm(
                    "grid min-h-screen w-full items-center justify-center bg-gradient-to-b from-[#f9f8fa] to-[#dbfadd] text-black",
                    classname
                )}
            >
                {children}
            </main>
            <Footer />
        </>
    );
};

export default PublicLayout;
