import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

import CustomImage from "../atoms/CustomImage"
import Copyright from "../atoms/Copyright"
import Toc from "../atoms/Toc"
import ShareButtons from "../atoms/ShareButtons"
import Divider from "../atoms/Divider"
import { responsive } from "../../../config"

export default class BlogPage extends React.Component {
  getTags(tags) {
    return tags.map(tag => {
      return <span className="tag">{tag}</span>
    })
  }

  render() {
    let meta = this.props.metadata
    let toc = this.props.toc
    let url = `https://www.takigawa-memo.com${meta.slug}`
    let title = `${meta.title} - TAKIGAWA MEMO`
    return (
      <Segment>
        <StyledContainer>
          <MobileTitle>{meta.title}</MobileTitle>
          <Info>
            <Date>
              <h4>{meta.date}</h4>
            </Date>
            <Tags className="tags">{this.getTags(meta.tags)}</Tags>
          </Info>
          <Description>{meta.description}</Description>
          <Divider />
          <CustomImage fileName={meta.thumbnail.name} alt="thumbnail" />
          <ShareButtons url={url} title={title} />
          <Toc data={toc} />
          <MobileStyledHtml
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
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;
`
const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)}
  width: 90%
  margin: auto
`

const MobileStyledHtml = styled.div`
  padding-top: ${rhythm(2)};
  & > p {
    font-size: ${scale(0).fontSize}
    line-height: ${rhythm(3 / 2)}
    margin: ${rhythm(1)} 0
  }
  & > ol > li {
    font-size: ${scale(0).fontSize}
    line-height: ${rhythm(1)}
  }
  & > h2 {
    font-size: ${scale(1 / 2).fontSize}
    line-height: ${rhythm(2)}
  }
  & > ul > li {
    font-size: ${scale(0).fontSize}
    line-height: ${rhythm(1)}
  }

  @media (min-width: ${responsive.tablet.minWidth}) {
    padding-top: ${rhythm(2)};
    & > p {
      font-size: ${scale(1 / 8).fontSize}
      line-height: ${rhythm(2)}
      margin: ${rhythm(1)} 0
    }
    & > ol > li {
      font-size: ${scale(1 / 8).fontSize}
      line-height: ${rhythm(2)}
    }
    & > h2 {
      font-size: ${scale(1 / 2).fontSize}
      line-height: ${rhythm(2)}
    }
    & > ul > li {
      font-size: ${scale(1 / 8).fontSize}
      line-height: ${rhythm(2)}
    }
  }
`
const MobileTitle = styled.h1`
  padding-top: ${rhythm(2)}
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}

  @media (min-width: ${responsive.tablet.minWidth}) {
    padding-top: ${rhythm(4)}
    font-size: ${scale(3 / 2).fontSize}
    line-height: ${rhythm(3)}
  }
`
const Date = styled.div`
  & > h4 {
    font-size: ${scale(0).fontSize}
    line-height: ${rhythm(3)}
    text-align: center
    color: #4b5454
    margin: auto
  }
`

const Description = styled.p`
  font-size: ${scale(0).fontSize}
  line-height: ${scale(0).lineHeight}
`

const Tags = styled.div`
  margin-left: ${rhythm(1)};
`

const Info = styled.div`
  display: flex;
  height: ${rhythm(3)};
`
