import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useQuery } from "react-query";

import { api } from "@utils/api";
import PublicLayout from "@/components/layouts/PublicLayout";
import {
    EventHandler,
    FormEvent,
    useRef,
    useState,
    useEffect,
} from "react";
import { User } from "@prisma/client";

const Home: NextPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const textRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta
                    name='description'
                    content='Generated by create-t3-app'
                />
                <link
                    rel='icon'
                    href='/favicon.ico'
                />
            </Head>
            <PublicLayout classname=''>
                <section className='flex h-screen flex-col text-center'>
                    <h1 className=' '>Lorem</h1>
                    <p className=' '>
                        Culpa fugiat amet aliquip proident ullamco. Ea
                        duis culpa amet amet minim quis mollit et sit
                        in velit qui ad. Quis sit incididunt ad
                        nostrud exercitation do mollit nostrud laborum
                        fugiat consectetur id. Reprehenderit
                        incididunt do quis consequat culpa non
                        proident excepteur nisi tempor ex in laboris
                        quis.
                    </p>
                </section>
                <section className='h-screen'>
                    <h1 className=''>Ipsum</h1>

                    <div className='flex'>
                        <h2>The changes</h2>
                        <p>{textRef.current?.value}</p>
                    </div>
                </section>
                <section className='h-screen '>
                    <h1>312</h1>
                </section>
            </PublicLayout>
        </>
    );
};

export default Home;
