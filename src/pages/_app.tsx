import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@utils/api";
import Head from "next/head";
import "@styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors =
    | "darkGreen"
    | "newGreen"
    | "primaryColorName"
    | "secondaryColorName"
    | DefaultMantineColor;

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
    }
}

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <MantineProvider
                theme={{
                    colors: {
                        darkGreen: [
                            "#EDF7EF",
                            "#CDEAD3",
                            "#ACDCB7",
                            "#8CCF9B",
                            "#6CC17F",
                            "#4BB463",
                            "#3C904F",
                            "#2D6C3B",
                            "#1E4828",
                            "#0F2414",
                        ],
                        newGreen: [
                            "#E6FEF3",
                            "#BAFDDF",
                            "#8DFBCA",
                            "#61FAB5",
                            "#34F9A0",
                            "#08F78B",
                            "#06C66F",
                            "#059454",
                            "#036338",
                            "#02311C",
                        ],
                    },
                    colorScheme: "dark",
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Component {...pageProps} />
            </MantineProvider>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
