/** @type {import("prettier").Config} */
const config = {
    arrowParens: "always",
    jsxSingleQuote: true,
    printWidth: 70,
    singleAttributePerLine: true,
    tabWidth: 4,
    useTabs: false,
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
