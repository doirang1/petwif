import * as S from './Button.style.jsx';

export default function Button({
  fontSize,
  buttonStyle,
  hasBorder,
  padding,
  disabled,
  onClick,
  children,
}) {
  return (
    <S.Button
      $fontSize={fontSize}
      $style={buttonStyle}
      $hasBorder={hasBorder}
      $padding={padding}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}
