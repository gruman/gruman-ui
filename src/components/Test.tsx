import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from '../theme/ThemeProvider';

const StyledButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
  const { theme } = useTheme();

  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

export default Button;
