import * as React from 'react';
import Helmet from 'react-helmet';

import Gop from './Gop';

type Props = {
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
  isPostPage?: boolean;
};

const Seo: React.FC<Props> = (props) => {
  const title = props.title + ' - TAKIGAWA MEMO';
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta
        name="google-site-verification"
        content="b_z5TAwrxYIo9jF886d31cgslCs-bgVKEzzpfYzDEsU"
      />
      <meta name="author" content="Daichi Takigawa" />
      <meta name="description" content={props.description} />
      <Gop
        title={title}
        description={props.description}
        url={props.url}
        isPostPage={props.isPostPage}
        facebookAppId="132563744601547"
        imageUrl={props.imageUrl}
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700&display=swap"
        rel="stylesheet"
        type="text/css"></link>
      <script src="https://apis.google.com/js/api.js"></script>
    </Helmet>
  );
};

export default Seo;
