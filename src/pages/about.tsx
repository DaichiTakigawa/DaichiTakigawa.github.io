import * as React from 'react';

import {Seo} from '../components/atoms';
import {UiContext} from '../contexts';
import {About, Content} from '../components/organisms';

const Component: React.FC = () => {
  const {setSlug} = React.useContext(UiContext.Context);
  React.useEffect(() => {
    setSlug(UiContext.TopPages.ABOUT);
  }, []);

  return (
    <>
      <Seo title="このサイトについて" description="このサイトについて" />
      <Content>
        <About />
      </Content>
    </>
  );
};

export default Component;
