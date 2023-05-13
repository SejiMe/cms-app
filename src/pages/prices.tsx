import PublicLayout from "@/components/layouts/PublicLayout";
import React from "react";

type Props = {
    hello: "";
};

const Prices = (props: Props) => {
    return (
        <PublicLayout>
            <h1>Prices!</h1>
        </PublicLayout>
    );
};

export default Prices;
