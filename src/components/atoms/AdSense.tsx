import * as React from 'react';
import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {rhythm} from '../../lib/typography';
import {responsive} from '../../constants';

type Props = {
  format?: string;
};

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSense extends React.FC<Props> {
  Responsive: React.FC<Props>;
}

const AdSense: AdSense = ({format = 'auto'}) => {
  useEffect(() => {
    if (window) {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (e) {
        // console.log(e)
      }
    }
  });

  return (
    <div>
      <Ins
        className="adsbygoogle"
        data-ad-client="ca-pub-8690013250708757"
        data-ad-slot="8825185774"
        data-ad-format={format}
      />
    </div>
  );
};

// eslint-disable-next-line react/display-name
AdSense.Responsive = ({format = 'auto'}) => {
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    if (showAds) {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (e) {
        // console.log(e)
      }
    } else if (window) {
      const minWidth = responsive.tablet.minWidth;
      const shouldShowAds = window.innerWidth >= minWidth;
      if (shouldShowAds) {
        setShowAds(true);
      }
    }
  }, [showAds]);

  if (!showAds) return null;

  return (
    <Container>
      <Ins
        className="adsbygoogle"
        data-ad-client="ca-pub-8690013250708757"
        data-ad-slot="8825185774"
        data-ad-format={format}
      />
    </Container>
  );
};
const Container = styled.div({
  margin: `${rhythm(1)} ${rhythm(1 / 2)}`,
});

const Ins = styled.ins({
  display: 'block',
});

export default AdSense;
