import React from 'react'
import styled from 'styled-components'
import {Responsive, Header} from 'semantic-ui-react'
import {scale, rhythm} from '../../utils/typography'

import breakpoint from '../../utils/breakpoint'
import src from '../../../contents/images/profile.jpg'

export default () => (
  <div>
    <Responsive maxWidth={breakpoint.moblieUb}> {/*mobile*/}
      <div style={{minHeight: "1000px", backgroundColor: "white" }}>
        <Header size='large'>
          MEMO
        </Header>
      </div>
    </Responsive>
    <Responsive minWidth={breakpoint.tabletLb}>  {/*web*/}
      <div style={{
        margin: `${rhythm(4)} auto`,
        maxWidth: '86%',
        minHeight: "1000px",
        backgroundColor: "#EEEEEE"
      }}>
        <div style={{minHeight: "1000px", backgroundColor: "white" }}>
          <Img src={src} alt="profile"/>
          <Title>
            MEMO
          </Title>
        </div>
      </div>
    </Responsive>
    </div>
)

const Img = styled.img`
  height: ${rhythm(16)}
  float: right
`

const Title = styled.h1`
  font-size: ${scale(2).fontSize}
  line-height: ${rhythm(4)}
`