import { HomePageProps } from '@/components/page/home/hooks/useHomePageHook';
import { useLiff } from '@/hooks/useLiff';
import { useEffect, useState } from 'react';
import { Liff } from '@line/liff/';

export const HomeContent = ({}: HomePageProps) => {
  const { liff } = useLiff();
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    if (!liff) return;
    if (!liff.isLoggedIn()) {
      liff.login();
    }
    liff.getProfile().then((profile) => {
      console.log(profile);
      setProfile(profile);
    });
  });

  return <div>v1 aa{profile}</div>;
};
