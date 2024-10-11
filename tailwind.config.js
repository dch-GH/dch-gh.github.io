const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#FFFFFF',
            transparentblue: '#2447f779',
            blue: '#2446f7',
            red: '#FF0000',
            black: '#000000',
            darkblue: '#091856',
            navyblue: '#0f2898',
            gray: '#e2e2e2',
            lightblue: '#0092ff',
            yinmnblue: '#415a77ff',

            blackalpha: 'rgba(3, 15, 29, 0.25)',
            richblack2: '#00171fff',
            prussianblue: '#003459ff',
            silverlakeblue: '#778da9ff',
            cerulean: '#007ea7ff',
            platinum: '#e0e1ddff',
            pictonblue: '#00a8e8ff'
        },
        extend: {
            borderRadius: {
                '*': '8px',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                ibmplexmono: ['IBM Plex Mono', 'sans-serif'],
            },
            textShadow: {
                heavy: '2px 2px 2px rgba(0, 0, 0, 1)',
                DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            },
            height: {
                // 54 px for navbar
                screen: 'calc(100vh - 52px)'
            },
            boxShadow: {
                xs: '3px 3px black',
                sm: '4px 4px black',
                md: '8px 8px black',
                lg: '10px 10px black'
            },
            dropShadow: {
                md: '0px 0px 2px #091856',
                hover: '0px 6px 2px #091856'
            },
            backgroundImage: {
            },
            backgroundSize: {
                pixel: '7px',
                'pixel-lg': '14px'
            },
            keyframes: {
                scrolling: {
                    '0%': {
                        backgroundPosition: '0% 0%'
                    },
                    '50%': {
                        backgroundPosition: '50% 50%'
                    },
                    '100%': {
                        backgroundPosition: '100% 100%'
                    }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(1deg)' },
                    '50%': { transform: 'rotate(-1deg)' },
                    '75%': { transform: 'rotate(1deg)' }
                }
            },
            animation: {
                scroll: 'scrolling 120s infinite linear',
                wiggle: 'wiggle 1s ease-in-out infinite'
            },
            typography: ({ theme }) => ({
                maincolors: {
                    css: {
                        '--tw-prose-headings': theme('colors.white'),
                        '--tw-prose-bold': theme('colors.cerulean'),
                        '--tw-prose-links': theme('colors.pictonblue'),
                        '--tw-prose-quotes': theme('colors.silverlakeblue'),
                        '--tw-prose-code': theme('colors.pictonblue')
                    }
                }
            })
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value
                    })
                },
                { values: theme('textShadow') }
            );
        })
    ]
};