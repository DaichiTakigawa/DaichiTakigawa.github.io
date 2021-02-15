import * as React from 'react';

type Props = {
  isPostPage: boolean;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  facebookAppId: string;
};

const Gop: React.FC<Props> = (props) => {
  if (!props.isPostPage) {
    return null;
  } else {
    return (
      <>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <meta property="og:type" content="article" />
        <meta
          property="og:site_name"
          content="たきがわのメモ - TAKIGAWA MEMO"
        />
        <meta property="og:image" content={props.imageUrl} />
        <meta property="fb:app_id" content={props.facebookAppId} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="bob_yama" />
      </>
    );
  }
};

export default Gop;
