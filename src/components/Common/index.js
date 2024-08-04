import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.$gap || 'unset'};
`;
