import { prisma } from "@/server/db";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

//get server side props

interface SlugLocationProps {
    "": "";
}

interface RepoProps {
    LocationID: string;
    isLoading: boolean;
}

const LotSlug = ({}: SlugLocationProps) => {
    const router = useRouter();
    
   
    return (
        <main>
            <div>Slug: {router.query.locationID}</div>
        </main>
    );
};

export default LotSlug;
