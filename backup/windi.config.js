import colors from 'windicss/colors'

export default {
  safelist: 'bg-secondary-darker',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#f2fafd',
        100: '#e6f5fc',
        200: '#bfdff6',
        300: '#99cff1',
        400: '#4db9e7',
        DEFAULT: '#0088dc',
        600: '#008bc6',
        700: '#004984',
        800: '#004563',
        900: '#003042'
      },
      'secondary-surface': '#E5F9FF',
      'secondary-lightest': '#B7E1ED',
      'secondary-lighter': '#95CDDE',
      'secondary-light': '#71A2B0',
      secondary: '#497A87',
      'secondary-dark': '#255461',
      'secondary-darker': '#003543',
      'secondary-darkest': '#012A35',
      'secondary-black': '#001E26',
      tertiary: '#B2CCCC', // cloud
      'cloud-surface': '#E6F0F0',
      'cloud-lightest': '#D1E2E2',
      'cloud-lighter': '#B2CCCC',
      'cloud-light': '#92ADAD',
      cloud: '#688282',
      'cloud-dark': '#566B6B',
      'cloud-darker': '#334040',
      'cloud-darkest': '#273131',
      'cloud-black': '#1A2121',
      black: '#000',
      white: '#fff',
      blue: colors.lightBlue,
      green: {
        // 50: "#eefdf2",
        50: '#d0dafc',
        100: '#b0bafc',
        200: '#8c9bfa',
        300: '#647cf4',
        400: '#3740e9',
        500: '#0032d7',
        600: '#0010bb',
        700: '#001999',
        800: '#041a73',
        900: '#131d4d'
        // 950: "#132a1c",
      },
      red: colors.red,
      rose: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      gray: colors.gray,
      purple: colors.purple,
      sky: {
        surface: '#E5F9FF',
        lightest: '#B7E1ED',
        lighter: '#95CDDE',
        light: '#71A2B0',
        DEFAULT: '#497A87',
        dark: '#255461',
        darker: '#003543',
        darkest: '#012A35',
        black: '#001E26'
      },
      mint: {
        surface: '#E7FEFD',
        lightest: '#C5EEEC',
        lighter: '#A8DDDB',
        light: '#7EB1B0',
        DEFAULT: '#558887',
        dark: '#2E6160',
        darker: '#003C3C',
        darkest: '#012E2F',
        black: '#002021'
      },
      indigo: {
        lighter: '#80B1E3',
        light: '#408BD6',
        DEFAULT: '#0064C8',
        dark: '#0055AA',
        darker: '#00468C'
      },
      sand: {
        surface: '#F5F5EB',
        lightest: '#EDEDD5',
        lighter: '#DEDEB6',
        light: '#B4B48C',
        DEFAULT: '#9C9C6A',
        dark: '#636330',
        darker: '#3B3B00',
        darkest: '#2D2E01',
        black: '#1F2100'
      }
    },
    extend: {
      fontFamily: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono'
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  shortcuts: {
    'app-button-primary-color': 'text-black bg-primary-500 hover:bg-primary-400 focus:ring-primary-600',
    'app-button-secondary-color': 'bg-gray-500 bg-opacity-10 hover:bg-opacity-20',
    'nuxt-text-highlight': 'py-2 px-4 rounded-md bg-gray-100 dark:bg-white dark:bg-opacity-10',
    'nuxt-text-highlight-hover': 'nuxt-text-highlight dark:hover:bg-opacity-9 light:hover:bg-gray-50',
    'text-display-6': {
      fontSize: '1.875rem',
      lineHeight: '2.25rem'
    },
    'text-display-5': {
      fontSize: '2.25rem',
      lineHeight: '2.5rem'
    },
    'text-display-4': {
      fontSize: '3rem',
      lineHeight: '3rem'
    },
    'text-display-3': {
      fontSize: '3.75rem',
      lineHeight: '3.75rem'
    },
    'text-display-2': {
      fontSize: '4.5rem',
      lineHeight: '4.5rem'
    },
    'text-display-1': {
      fontSize: '6rem',
      lineHeight: '6rem'
    },
    'text-body-xs': {
      fontSize: '0.75rem',
      lineHeight: '1rem'
    },
    'text-body-sm': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    },
    'text-body-base': {
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    'text-body-lg': {
      fontSize: '1.125rem',
      lineHeight: '1.75rem'
    },
    'text-body-xl': {
      fontSize: '1.25rem',
      lineHeight: '1.75rem'
    },
    'text-body-2xl': {
      fontSize: '1.5rem',
      lineHeight: '2rem'
    }
  }
}
