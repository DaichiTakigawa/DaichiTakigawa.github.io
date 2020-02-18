import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../../utils/typography"

export default () => (
  <Footer>
    <div class="is-divider" data-content="© 2019- TAKIGAWA MEMO" />
  </Footer>
)

const Footer = styled.footer`
  height: ${rhythm(4)};
  width: 80%;
  margin: auto;

  & > .is-divider {
    border-top: 0.14rem solid rgba(34, 36, 38, 0.15);
  }

  & > .is-divider::after {
    font-size: ${scale(1 / 6).fontSize};
    padding-top: .1rem;
    color: gray;
  }
`
