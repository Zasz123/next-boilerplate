import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

export const renderStatic = async (html: string) => {
  const { extractCritical } = createEmotionServer(
    createCache({ key: 'yanggaeng' }),
  );
  const { ids, css } = extractCritical(html);

  return { ids, css };
};
