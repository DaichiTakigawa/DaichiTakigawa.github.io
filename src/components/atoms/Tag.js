import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

const Tag = styled.span`
  font-size: ${scale(-1 / 6).fontSize};
  background: rgba(204, 204, 204, 0.3);
  border-radius: 10%;
  margin-left: ${rhythm(1 / 2)};

  &::before {
    content: " ";
    padding-left: 0.5rem;
  }

  &::after {
    content: "";
    padding-right: 0.5rem;
  }
`

export default Tag
