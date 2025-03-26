import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { useTheme, ThemeProvider } from '../theme/ThemeProvider';

interface CustomTextProps extends TextProps {
  type?: 'header' | 'subheader' | 'body' | 'caption' | 'listText';
  marginBottom?: number;
}

const Text: React.FC<CustomTextProps> = ({ children, type = 'body', marginBottom, style, ...props }) => {
  const { themeStyles } = useTheme();

  console.log(marginBottom)

  // Additional styles based on `type`
  const textStyle = styles[type] || styles.body;

  return (
    <ThemeProvider>
    <RNText style={[themeStyles.text, textStyle, style, { marginBottom: marginBottom && marginBottom >= 0 ? marginBottom : type === 'caption' ? 10 : 20}]} {...props}>
      {children}
    </RNText>
    </ThemeProvider>
  );
};

export default Text

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subheader: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 10
  },
  body: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
});
