import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  useEffect(() => {
    const login = async () => {
      const liff = await import('@line/liff');
      await liff.default.init({ liffId: '1660794789-0qKJO77l' });
      if (!liff.default.isLoggedIn()) {
        liff.default.login();
      }

      const profile = await liff.default.getProfile();
      profile.displayName;
      console.log(profile.displayName);
    };
    login();
  }, []);

  return (
    <>
      {/* <Head>
        <title>在庫管理</title>
      </Head> */}
      {/* <ChakraProvider> */}
      <Component {...pageProps} />
      {/* </ChakraProvider> */}
    </>
  );
};

export default MyApp;
