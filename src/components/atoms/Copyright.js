import React from "react"
import { Divider, Header, Icon } from "semantic-ui-react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

export default () => (
  <div style={{ width: "80%", margin: `0 auto`, paddingBottom: rhythm(2) }}>
    <Divider horizontal>
      <Header
        size="tiny"
        color="grey"
        icon="copyright outline"
        content="TAKIGAWA MEMO"
      />
    </Divider>
  </div>
)

const Span = styled.span`
  font-size: ${scale(100).fontSize}
  line-height: ${scale(1 / 2).lineHeight}
  color: #333333
`
