import * as React from 'react'

import Content from '../components/organisms/content'
import App from '../components/organisms/app'
import Seo from '../components/atoms/seo'
import Contact from '../components/organisms/contact'

const Component: React.FC = () => (
  <App>
    <Seo title="コンタクト" description="Contact" />
    <Content currentPage="Contact">
      <Contact />
    </Content>
  </App>
)

export default Component
