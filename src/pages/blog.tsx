import * as React from 'react';
import {graphql} from 'gatsby';

import {Seo} from '../components/atoms';
import {Content} from '../components/organisms';
import {BlogList} from '../components/molecules';
import {UiContext} from '../contexts';

import {SiteDescriptionQuery} from '../../types/graphql-types';

type Props = {
  data: SiteDescriptionQuery;
};

const Component: React.FC<Props> = ({data}) => {
  const {setSlug} = React.useContext(UiContext.Context);
  React.useEffect(() => {
    setSlug(UiContext.TopPages.BLOG);
  }, []);

  return (
    <>
      <Seo title="ブログ" description={data.site.siteMetadata.description} />
      <Content>
        <BlogList />
      </Content>
    </>
  );
};

export const query = graphql`
  query SiteDescription {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default Component;
