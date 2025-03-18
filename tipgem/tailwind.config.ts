import { AlignCenter } from "lucide-react"
import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "#3498db",
            secondary: "#2ecc71",
            danger: "#e74c3c",
        }, 
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1440px",
            },
        },
        extend: {
            colors: {
                background: {
                    DEFAULT: "#ffffff",
                    dark: "#1f2937",
                },
                text: {
                    DEFAULT: "#1f2937",
                    dark: "#f9fafb",
                  },
            }
        }
    }
}