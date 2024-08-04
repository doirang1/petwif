import styled from 'styled-components';

const ProfileStyle = styled.img`
  width: ${(props) => props.$size || '55px'};
  height: ${(props) => props.$size || '55px'};
  border-radius: 100%;
`;

export default function Profile({ src, size }) {
  return <ProfileStyle src={src} $size={size} />;
}
