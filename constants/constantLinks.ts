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

export const cemeteryLink = [
    {url: "/portal/cemetery/MausoleumTop", label: 'Mausoleum (Top)'},
    {url: "/portal/cemetery/Sapphire1", label: 'Sapphire 1'},
    {url: "/portal/cemetery/Sapphire2", label: 'Sapphire 2'},
    {url: "/portal/cemetery/Topaz1", label: 'Topaz'},
    {url: "/portal/cemetery/Topaz2", label: 'Topaz'},
    {url: "/portal/cemetery/SapphirePrime1", label: 'Sapphire Prime Lawn'},
    {url: "/portal/cemetery/Jasper1", label: 'Jasper'},
    {url: "/portal/cemetery/Amethyst", label: 'Amethyst'},
    {url: "/portal/cemetery/Gold1", label: 'Gold'},
    {url: "/portal/cemetery/Gold2", label: 'Gold'},
    {url: "/portal/cemetery/SapphirePrime2", label: 'Sapphire Prime Lawn'},
    {url: "/portal/cemetery/MausoleumBottom", label: 'Mausoleum (Bottom)'},
]

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
