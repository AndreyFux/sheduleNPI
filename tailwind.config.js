/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,

    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            transitionDuration: {
                DEFAULT: "400ms",
            },
        },
    },
    plugins: [],
};
