import * as React from 'react';
import {useState} from 'react';
import styled from '@emotion/styled';

import {rhythm, scale} from '../../lib/typography';
import {responsive} from '../../constants';

type Props = {
  html: string;
};

const Toc: React.FC<Props> = ({html}) => {
  const [state, setState] = useState({expand: true});

  let toc = null;
  if (state.expand) {
    toc = (
      <TocContainer>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </TocContainer>
    );
  }

  return (
    <Background>
      <FlexContainer>
        <div>
          <Title>目次</Title>
        </div>
        <ClickCircle onClick={() => setState({expand: !state.expand})}>
          <span>{state.expand ? '-' : '+'}</span>
        </ClickCircle>
      </FlexContainer>
      {toc}
    </Background>
  );
};

const Background = styled.div({
  margin: `${rhythm(3)} 0 ${rhythm(2)} 0`,
  padding: `${rhythm(1 / 2)} ${rhythm(1)}`,
  backgroundColor: 'rgba(224, 224, 224, 0.5)',
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    width: '56%',
  },
});

const Title = styled.span({
  fontSize: scale(1 / 6).fontSize,
  fontWeight: 'bold',
  color: 'rgb(87, 87, 87)',
});

const FlexContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ClickCircle = styled.div({
  cursor: 'pointer',
  width: rhythm(1.2),
  height: rhythm(1.2),
  borderRadius: '50%',
  background: 'rgba(156, 156, 156, 0.5)',
  textAlign: 'center',
  paddingTop: '2px',
  '& > span': {
    fontWeight: 'bold',
  },
});

const TocContainer = styled.div({
  width: '80%',
  margin: '0 auto',
  padding: `${rhythm(1)} 0 0 0`,
  '& ul': {
    width: 'auto',
    li: {
      color: '#96acb3',
      listStyle: 'decimal',
      lineHeight: rhythm(3 / 2),
      p: {
        margin: '0 auto',
      },
      ul: {
        marginTop: 0,
      },
    },
    a: {
      textDecoration: 'none',
      textShadow: 'none',
      color: 'rgb(82, 82, 82)',
    },
  },
});

export default Toc;
