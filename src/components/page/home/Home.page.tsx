import { memo } from 'react';

import { HomeContent } from '@/components/page/home/components/HomeContent';
import { useHomePageHook } from '@/components/page/home/hooks/useHomePageHook';
import { NextPage } from 'next';

const HomePage: NextPage = memo(() => {
  return <HomeContent {...useHomePageHook()} />;
});

HomePage.displayName = Object.keys({ HomePage }).join();

export default HomePage;
