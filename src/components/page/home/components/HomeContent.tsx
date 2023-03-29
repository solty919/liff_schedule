import { HomePageProps } from '@/components/page/home/hooks/useHomePageHook';
import { Profile, useLiff } from '@/hooks/useLiff';
import { useEffect, useState } from 'react';

export const HomeContent = ({}: HomePageProps) => {
  const { liff } = useLiff();
  const [profile, setProfile] = useState<Profile>();

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

  return (
    <div>
      <p>ここがホーム</p>
      {profile?.displayName}
      {JSON.stringify(profile)}
    </div>
  );
};
