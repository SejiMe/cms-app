import React from "react";
import { useSession } from "next-auth/react";

type ProtectedRouteProps = {
    children: React.ReactNode;
};

const ProtectedRoutes = ({ children }: ProtectedRouteProps) => {
    const { data: SessionData } = useSession();
    console.log(SessionData);
    return <>{children}</>;
};

export default ProtectedRoutes;
