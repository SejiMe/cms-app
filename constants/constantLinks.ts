import {
    IconSettings,
    Icon2fa,
    IconGrave,
    IconLogout,
    IconFileStack,
    IconLayoutDashboard,
    IconUsers,
} from "@tabler/icons-react";

export const noAuthRequired = [
    "/",
    "/about",
    "/news",
    "/prices",
    "/partnership",
];

export const AuthRequired = [
    "/portal",
    "/portal/dashboard",
    "/portal/admin",
    "/portal/employees",
    "/portal/cemetery",
];

export const Links = [
    // Links Public

    { url: "/", label: "Home" },
    { url: "/prices", label: "Prices" },
    { url: "/partnership", label: "Partners" },
    { url: "/about", label: "About" },
];

export const PortalLinks = [
    // Links Public

    {
        url: "/portal/dashboard",
        label: "Dashboard",
        icon: IconLayoutDashboard,
    },
    { url: "/portal/cemetery", label: "Cemetery", icon: IconGrave },
    { url: "/portal/orders", label: "Orders", icon: IconFileStack },
    { url: "/portal/manpow", label: "Man Power", icon: IconUsers },
];
