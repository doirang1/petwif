import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.$gap || 'unset'};
`;

export const Layout = styled.div`
  background: ${(props) => props.theme.color.white};
  border-radius: 15px;
`;
