import * as React from 'react';
import styled from '@emotion/styled';
import {Title, Divider, AdSense} from '../../atoms';
import {rhythm} from '../../../lib/typography';

import Sns from './Sns';
import LinkList from './LinkList';

const Navigation: React.FC = () => {
  return (
    <>
      <Title />
      <StickyContainer>
        <StyledDivider />
        <LinkList />
        <Sns />
        <AdSense.Responsive format="rectangle" />
      </StickyContainer>
    </>
  );
};

const StickyContainer = styled.div({
  position: 'sticky',
  top: 0,
});

const StyledDivider = styled(Divider)({
  margin: `${rhythm(2)} ${rhythm(1)}`,
});

export default Navigation;
