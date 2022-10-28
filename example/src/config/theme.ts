const BASE_COLOR = '##FF0100';
const TEXT_COLOR = '#090A0A';
const TOAST_BG = '#373434';
const ORDER_STATUS_BG = '#FAEEE1';

export interface Colors {
  base: string;
  baseGray: string;
  bg: string;
  darkGray: string;
  description: string;
  fg: string;
  gluten: string;
  lighterGray: string;
  lightestGray: string;
  lightGray: string;
  orderStatusBackground: string;
  saucy: string;
  text: string;
  transparent: string;
  toastBackground: string;
}

export interface Theme {
  colors: Colors;
  fontFamily: string;
  fontSizes: {
    s: number;
    m: number;
  };
  fontWeights: {
    light: string;
    normal: string;
    bold: string;
  };
  lineHeights: {
    base: string;
  };
  radii: {
    card: string;
  };
}

const theme: Theme = {
  colors: {
    base: BASE_COLOR,
    baseGray: '#CDCFD0',
    bg: '#FFFFFF',
    darkGray: '#979C9E',
    description: '#727070',
    fg: '#000000',
    gluten: '#FAEEE1',
    lighterGray: '#F2F4F5',
    lightestGray: '#F7F9FA',
    lightGray: '#E3E5E5',
    orderStatusBackground: ORDER_STATUS_BG,
    saucy: '#FF0100',
    text: TEXT_COLOR,
    transparent: 'transparent',
    toastBackground: TOAST_BG,
  },
  fontFamily: 'Apercu',
  fontSizes: {
    s: 12,
    m: 16,
  },
  fontWeights: {
    light: '300',
    normal: '400',
    bold: '700',
  },
  lineHeights: {
    base: '1.5',
  },
  radii: {
    card: '8px',
  },
};

export default theme;
