import * as React from 'react';
import {graphql} from 'gatsby';

import {Seo} from '../components/atoms';
import {Home, Content} from '../components/organisms';
import {UiContext} from '../contexts';
import {BaseSiteDataQuery} from '../../types/graphql-types';

type Props = {
  data: BaseSiteDataQuery;
};
const Component: React.FC<Props> = ({data}) => {
  const {setSlug} = React.useContext(UiContext.Context);
  React.useEffect(() => {
    setSlug(UiContext.TopPages.HOME);
  }, []);

  const title = data.site?.siteMetadata?.title;
  const description = data.site?.siteMetadata?.description;

  return (
    <>
      <Seo title={title} description={description} />
      <Content>
        <Home />
      </Content>
    </>
  );
};
export default Component;

export const query = graphql`
  query BaseSiteData {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
