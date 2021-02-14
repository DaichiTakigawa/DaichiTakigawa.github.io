import * as React from 'react';
import Image from './Image';

interface Props {
  slug: string;
}

const base_url = 'https://accounts.google.com/o/oauth2/auth';
const clientId =
  '402513190092-ept29nft077drfeofv7c3ptmidh44ect.apps.googleusercontent.com';
const redirect_uri = encodeURIComponent(
  'https://api.takigawa-memo.com/oauth/google/callback'
);
const scope = 'profile email';

const GoogleAuth: React.FC<Props> = ({slug}) => {
  const href = `${base_url}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&state=${slug}`;

  const onClick = React.useCallback(() => {
    window.location.assign(href);
  }, []);

  return (
    <button className={'button is-link'} onClick={onClick}>
      <span className={'icon'}>
        <Image fileName={'google.png'} alt={'google'} />
      </span>
      <span>Sign Up With Google</span>
    </button>
  );
};

export default GoogleAuth;
