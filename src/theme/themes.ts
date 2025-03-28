export const lightTheme = {
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    primary: '#007BFF',
    secondary: '#6C757D',
  },
};

export const darkTheme = {
  colors: {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#1E90FF',
    secondary: '#A9A9A9',
  },
};

export type Theme = typeof lightTheme;

export const createCustomTheme = (customValues: Partial<Theme>): Theme => ({
  ...lightTheme,
  ...customValues,
});
