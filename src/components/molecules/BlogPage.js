import React from "react"
import styled from "styled-components"
import { Divider, Label, Responsive } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"
import CustomImage from "../atoms/CustomImage"
import Copyright from "../atoms/Copyright"
import Toc from "../atoms/Toc"

export default class BlogPage extends React.Component {
  getTags(tags) {
    return tags.map(tag => {
      return (
        <Label
          tag
          size="mini"
          style={{
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
    let toc = this.props.toc
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
          <Info>
            <Date>{meta.date}</Date>
            <Tag>{this.getTags(meta.tags)}</Tag>
          </Info>
          <Description>{meta.description}</Description>
          <Divider />
          <CustomImage fileName={meta.thumbnail.name} alt="thumbnail" />
          <Toc data={toc} />
          <Responsive
            as={StyledHtml}
            minWidth={Responsive.onlyTablet.minWidth}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
          <Responsive
            as={MobileStyledHtml}
            maxWidth={Responsive.onlyMobile.maxWidth}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </StyledContainer>
        <Copyright />
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
    font-size: ${scale(1 / 8).fontSize}
    line-height: ${rhythm(2)}
    margin: ${rhythm(1)} 0
  }
  & > h2 {
    font-size: ${scale(1 / 2).fontSize}
    line-height: ${rhythm(2)}
  }
`

const MobileStyledHtml = styled.div`
  padding-top: ${rhythm(2)};
  .anchor {
    background-image: none;
  }
  & > p {
    font-size: ${scale(0).fontSize}
    line-height: ${rhythm(2)}
    margin: ${rhythm(1)} 0
  }
  & > h2 {
    font-size: ${scale(1 / 2).fontSize}
    line-height: ${rhythm(2)}
  }
`
const Title = styled.h1`
  padding-top: ${rhythm(4)}
  font-size: ${scale(3 / 2).fontSize}
  line-height: ${rhythm(3)}
`
const MobileTitle = styled.h1`
  padding-top: ${rhythm(2)}
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
`
const Date = styled.h4`
  font-size: ${scale(0).fontSize}
  line-height: ${scale(0).lineHeight}
  padding-top: ${rhythm(1 / 8)}
  margin-bottom: 0
  color:  #4b5454
`

const Description = styled.p`
  font-size: ${scale(0).fontSize}
  line-height: ${scale(0).lineHeight}
  margin-top: ${rhythm(1)}
`

const Tag = styled.div``

const Info = styled.div`
  display: flex;
`
