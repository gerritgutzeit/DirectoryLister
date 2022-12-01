const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: [
        'app/resources/**/*.{js,scss}',
        'app/src/**/*.php',
        'app/views/**/*.twig',
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                        100: '#c7c7c7',
                        200: '#c7c7c7',
                        300: '#c7c7c7',
                        400: '#c7c7c7',
                        500: '#c7c7c7',
                        600: '#c7c7c7',
                        700: '#c7c7c7',
                        800: '#c7c7c7',
                        900: '#c7c7c7',
                      },
                gray: {
                        100: '#3f3f3f',
                        200: '#3f3f3f',
                        300: '#3f3f3f',
                        400: '#3f3f3f',
                        500: '#1c1c1c',
                        600: '#1c1c1c',
                        700: '#1c1c1c',
                        800: '#1c1c1c',
                        900: '#111111',
                      },
                
                purple: {
                        100: '#3d3d3d',
                        200: '#3d3d3d',
                        300: '#3d3d3d',
                        400: '#3d3d3d',
                        500: '#3d3d3d',
                        600: '#3d3d3d',
                        700: '#3d3d3d',
                        800: '#272727',
                        900: '#272727',
                        },
            },
            fontFamily: {
                merriweather: ['Merriweather', ...defaultTheme.fontFamily.serif],
                mono: ['Source Code Pro', ...defaultTheme.fontFamily.mono],
                sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
            },
            textColor: {
                github: '#171515',
                twitter: '#1DA1F2'
            }
        }
    }
};
