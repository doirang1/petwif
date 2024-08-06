import * as S from './Button.style.jsx';

export default function Button({
  width,
  borderRadius,
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
      $width={width}
      $borderRadius={borderRadius}
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
