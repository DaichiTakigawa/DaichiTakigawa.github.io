import * as React from "react"

import Content from "../components/organisms/content"
import App from "../components/organisms/app"
import Seo from "../components/atoms/seo"
import About from "../components/molecules/about"

const Component: React.FC = () => (
  <App>
    <Seo title="このサイトについて" description="このサイトについて" />
    <Content currentPage="About">
      <About />
    </Content>
  </App>
)

export default Component