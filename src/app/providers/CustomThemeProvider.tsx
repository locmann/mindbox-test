import { createTheme, ThemeProvider } from '@mui/material';

import { FC, PropsWithChildren } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans', sans-serif",
    h2: {
      fontWeight: 100,
    },
  },
});

export const CustomThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
