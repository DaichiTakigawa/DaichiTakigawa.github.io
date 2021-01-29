import * as React from 'react'
import {useEffect, useState} from 'react'
import styled from '@emotion/styled'

import {rhythm} from '../../utils/typography'
import {responsive} from '../../../config'

type Props = {
  format?: string
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    adsbygoogle: any[]
  }
}

interface AdSense extends React.FC<Props> {
  Responsive: React.FC<Props>
}

const AdSense: AdSense = ({format = 'auto'}) => {
  useEffect(() => {
    if (window) {
      try {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      } catch (e) {
        // console.log(e)
      }
    }
  })

  return (
    <div>
      <Ins
        className="adsbygoogle"
        data-ad-client="ca-pub-6195920683902846"
        data-ad-slot="4511974705"
        data-ad-format={format}
      />
    </div>
  )
}

AdSense.Responsive = ({format = 'auto'}) => {
  const [state, setState] = useState({showAds: false})

  useEffect(() => {
    if (state.showAds) {
      try {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      } catch (e) {
        // console.log(e)
      }
    } else if (window) {
      const minWidth = responsive.tablet.minWidth
      const shouldShowAds = window.innerWidth >= minWidth
      if (shouldShowAds) {
        setState({showAds: true})
      }
    }
  }, [state.showAds])

  if (!state.showAds) return null

  return (
    <Container>
      <Ins
        className="adsbygoogle"
        data-ad-client="ca-pub-6195920683902846"
        data-ad-slot="4511974705"
        data-ad-format={format}
      />
    </Container>
  )
}
const Container = styled.div({
  margin: `${rhythm(1)} ${rhythm(1 / 2)}`,
})

const Ins = styled.ins({
  display: 'block',
})

export default AdSense
