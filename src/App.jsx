import { Outlet } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';

import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
