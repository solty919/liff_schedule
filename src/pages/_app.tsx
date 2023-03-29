import { LiffProvider } from '@/hooks/useLiff';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <LiffProvider liffId="1660794789-0qKJO77l" mock={{ enable: false }}>
      <Component {...pageProps} />
    </LiffProvider>
  );
};

export default MyApp;
