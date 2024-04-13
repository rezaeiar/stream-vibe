import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    45: "#E50000",
                    51: "#FF0000",
                    55: "#FF1919",
                    60: "#FF3333",
                    80: "#FF9999",
                    90: "#FFCCCC",
                    95: "#FFE5E5",
                    99: "#FFFAFA",
                },
                black: {
                    6: "#0F0F0F",
                    8: "#141414",
                    10: "#1A1A1A",
                    12: "#1F1F1F",
                    15: "#262626",
                    20: "#333333",
                    25: "#404040",
                    30: "#4C4C4C",
                },
                gray: {
                    60: "#999999",
                    65: "#A6A6A6",
                    70: "#B3B3B3",
                    75: "#BFBFBF",
                    90: "#E4E4E7",
                    95: "#F1F1F3",
                    97: "#F7F7F8",
                    99: "#FCFCFD",
                },
            },
            fontFamily: {
                "manrope-regular": "Manrope-Regular",
                "manrope-medium": "Manrope-Medium",
                "manrope-semibold": "Manrope-SemiBold",
                "manrope-bold": "Manrope-Bold",
            },
            backgroundImage: {
                'cta-pattern': "url('/images/banners/CTA.png')",
            }
        },
        container: {
            center: true,
            padding: "1rem"
        }
    },
    plugins: [],
};
export default config;
