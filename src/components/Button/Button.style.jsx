import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${(props) => {
    if (props.$style === 'light') {
      return css`
        background-color: #fff0d4;
        color: #f87f28;
      `;
    }

    if (props.$style === 'gray') {
      return css`
        background-color: #f3f4f6;
        color: #494949;
      `;
    }

    return css`
      background-color: #f87f28;
      color: #ffffff;
    `;
  }};

  width: 100%;
  border-radius: 10px;
  font-weight: 600;
  line-height: 29px;
  padding: ${(props) => `${props.$padding || 0} 0`};
  border: ${(props) => props.$hasBorder && '1px solid #F87F28'};
  font-size: ${(props) => props.$fontSize || '16px'};

  &:disabled {
    background: #e0dfdf;
    color: #cccccc;
    cursor: auto;
  }
`;
