import * as React from 'react';

import {Seo} from '../components/atoms';
import {UiContext} from '../contexts';
import {Content, Contact} from '../components/organisms';

const Component: React.FC = () => {
  const {setSlug} = React.useContext(UiContext.Context);
  React.useEffect(() => {
    setSlug(UiContext.TopPages.CONTACT);
  }, []);

  return (
    <>
      <Seo title="コンタクト" description="Contact" />
      <Content>
        <Contact />
      </Content>
    </>
  );
};

export default Component;
