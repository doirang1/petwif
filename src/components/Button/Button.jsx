import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 100%;
  padding: ${(props) => `${props.$padding || 0} 0`};
  background: ${(props) => {
    if (props.$style === 'light') return '#FFF0D4';
    if (props.$style === 'gray') return '#F3F4F6';
    return '#F87F28';
  }};
  border-radius: 10px;
  font-weight: 600;
  font-size: ${(props) => props.$fontSize || '16px'};
  line-height: 29px;
  color: ${(props) => {
    if (props.$style === 'light') return '#F87F28';
    if (props.$style === 'gray') return '#494949';
    return '#ffffff';
  }};
  border: ${(props) => props.$hasBorder && '1px solid #F87F28'};

  &:disabled {
    background: #e0dfdf;
    color: #cccccc;
    cursor: auto;
  }
`;

export default function Button({
  fontSize,
  buttonStyle,
  hasBorder,
  padding,
  onClick,
  children,
}) {
  return (
    <ButtonStyle
      $fontSize={fontSize}
      $style={buttonStyle}
      $hasBorder={hasBorder}
      $padding={padding}
      onClick={onClick}
    >
      {children}
    </ButtonStyle>
  );
}
