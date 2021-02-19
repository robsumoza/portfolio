import common from './common';

const lightTheme = {
  ...common,
  bg: {
    default: '#0A1A2F',
    defaultLight: '#112536',
    reverse: '#ff5502',
  },
  text: {
    default: '#F4F4F4',
    reverse: '#ff5502',
    accent: '#a3a8c3',
  },
  shadows: {
    default: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    small: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    medium: '0 20px 30px -15px rgba(2,12,27, 0.7)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
  },
};

export default lightTheme;
