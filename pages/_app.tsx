import { ThemeProvider } from '@emotion/react';
import { wrapper } from 'modules/store';
import type { AppProps } from 'next/app';

import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
