import React from "react"
import styled from "styled-components"
import { Divider, Label, Responsive } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"
import CustomImage from "../atoms/CustomImage"

export default class BlogPage extends React.Component {
  getTags(tags) {
    return tags.map(tag => {
      return (
        <Label
          tag
          size="mini"
          style={{
            verticalAlign: "text-bottom",
            marginLeft: rhythm(1),
          }}
        >
          {tag}
        </Label>
      )
    })
  }

  render() {
    let meta = this.props.metadata
    return (
      <Segment>
        <StyledContainer>
          <Responsive as={Title} minWidth={Responsive.onlyTablet.minWidth}>
            {meta.title}
          </Responsive>
          <Responsive
            as={MobileTitle}
            maxWidth={Responsive.onlyMobile.maxWidth}
          >
            {meta.title}
          </Responsive>
          <Date>
            {meta.date} {this.getTags(meta.tags)}
          </Date>
          <Description>{meta.description}</Description>
          <Divider />
          <CustomImage fileName={meta.thumbnail.name} alt="thumbnail" />
          <StyledHtml dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </StyledContainer>
      </Segment>
    )
  }
}

const Segment = styled.div`
  background-color: white
  border: 1px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
`
const StyledContainer = styled.div`
  padding-top: ${rhythm(4)}
  padding-bottom: ${rhythm(4)}
  margin: auto
  width: 84%
`
const StyledHtml = styled.div`
  padding-top: ${rhythm(2)};
  .anchor {
    background-image: none;
  }
  & > p {
    font-size: ${scale(1 / 6).fontSize}
    line-height: ${rhythm(2)}
    margin: ${rhythm(1)} 0
  }
  & > h2 {
    font-size: ${scale(1 / 2).fontSize}
    line-height: ${rhythm(2)}
  }
`
const Title = styled.h1`
  font-size: ${scale(3 / 2).fontSize}
  line-height: ${rhythm(3)}
`
const MobileTitle = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
`
const Date = styled.h2`
  font-size: ${scale(0).fontSize}
  line-height: ${rhythm(1)}
  color:  #4b5454
`

const Description = styled.div`
  font-size: ${scale(0).fontSize}
  line-height: ${rhythm(1)}
  margin-top: ${rhythm(1 / 2)}
`
