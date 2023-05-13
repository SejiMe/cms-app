import React, { useState } from "react";

import {
    createStyles,
    Navbar,
    Group,
    Code,
    getStylesRef,
    rem,
    Aside,
    Text,
} from "@mantine/core";

import { MantineLogo } from "@mantine/ds";
import { useSidebarStyles } from "../emotion/styles";
import CustomLink from "../custom/links/CustomLink";
import { HorizontalSection } from "@mantine/core/lib/AppShell/HorizontalSection/HorizontalSection";
import { theme } from "tailwind.config.cjs";
import { PortalLinks } from "constants/constantLinks";
import {
    IconLogout,
    IconSwitchHorizontal,
} from "@tabler/icons-react";
import { useRouter } from "next/router";

