/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    950: '#0F172A',
                    900: '#1E293B',
                    500: '#64748B',
                    300: '#CBD5E1',
                    100: '#F1F5F9',
                },
                emerald: {
                    500: '#10B981',
                    400: '#34D399',
                },
                sky: {
                    500: '#0EA5E9',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            }
        },
    },
    plugins: [],
}
