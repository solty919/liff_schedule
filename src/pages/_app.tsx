import { NextPage } from 'next';
import type { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
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
