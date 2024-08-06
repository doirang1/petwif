import { Outlet, useLocation } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';

import theme from './styles/theme';

function App() {
  const location = useLocation(); // 앨범제작 페이지에서는 헤더가 안보이도록 설정
  const isAlbumMakingPage = location.pathname === '/album-create';
  
  return (
    <ThemeProvider theme={theme}>
      {!isAlbumMakingPage && <Header />}
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
