import * as React from 'react';
import styled from '@emotion/styled';
import {scale, rhythm} from '../../../lib/typography';

const Contact: React.FC = () => (
  <Container>
    <Title>
      開発中
      <span role="img" aria-label="emoji">
        😢
      </span>
    </Title>
  </Container>
);

const Container = styled.div({
  paddingBottom: rhythm(4),
  textAlign: 'center',
  margin: 'auto',
  width: '80%',
  minHeight: '1000px',
});

const Title = styled.h1({
  paddingTop: rhythm(8),
  fontSize: scale(1).fontSize,
  lineHeight: rhythm(2),
});

export default Contact;
