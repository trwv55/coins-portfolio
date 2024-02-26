/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                0.5: '0.12rem',
            },
            transitionTimingFunction: {
                DEFAULT: 'ease-in-out',
            },
            transitionDuration: {
                DEFAULT: '300ms',
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
            },
            animation: {
                fade: 'fadeIn .5s ease',
            },
            zIndex: {
                1: '1',
                2: '2',
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',
                blackMain: 'rgb(36,46,52)',
                blue: 'rgb(49,142,245)',
                grey: 'rgb(48,59,66)',
                border: 'rgba(255, 255, 255, 0.075)',
            },
            width: {
                1300: '1300px',
            },
        },
    },
    plugins: [],
};
