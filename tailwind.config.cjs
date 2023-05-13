// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            tablet: "640px",
            laptop: "1024px",
        },
        extend: {
            fontFamily: {
                // caveat: ["Caveat", fontFamily.sans],
            },
        },
    },
    plugins: [],
};

module.exports = config;
