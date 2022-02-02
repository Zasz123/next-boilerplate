import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          width: 100%;
        }
      `}
    />
  );
}
