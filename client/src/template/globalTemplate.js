import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/globalStyles';
import theme from 'theme/theme';

const GlobalTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalTemplate;
