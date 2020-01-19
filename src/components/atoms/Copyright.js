import React from "react"
import { Divider, Header } from "semantic-ui-react"
import { rhythm } from "../../utils/typography"

export default () => (
  <div style={{ width: "80%", margin: `0 auto`, paddingBottom: rhythm(2) }}>
    <Divider horizontal>
      <Header
        size="tiny"
        color="grey"
        icon="copyright outline"
        content="2019- TAKIGAWA MEMO"
      />
    </Divider>
  </div>
)
