import React from "react"
import styled from "styled-components"
import { scale, rhythm } from "../../utils/typography"

import CustomImage from "../atoms/CustomImage"
import Copyright from "../atoms/Copyright"
import Toc from "../atoms/Toc"
import ShareButtons from "../atoms/ShareButtons"
import Divider from "../atoms/Divider"
import Tag from "../atoms/Tag"
import AdSense from "../atoms/Adsense"
import { responsive } from "../../../config"

export default class BlogPage extends React.Component {
  getTags(tags) {
    return tags.map(tag => {
      return <Tag>{tag}</Tag>
    })
  }

  // insertAds(html) {
  //   const parser = typeof DOMParser !== "undefined" && new DOMParser()
  
  //   const insertAdsense = ad => html => {
  //     if (!parser) return html
  //     const dom = parser.parseFromString(html, "text/html")
  //     const eles = [].slice.call(dom.querySelectorAll(".adsense"))
  //     if (eles) {
  //       eles.map(ele => (ele.innerHTML = ad))
  //     }
  //     return dom.body.innerHTML
  //   }
  // }

  render() {
    let meta = this.props.metadata
    let toc = this.props.toc
    let url = `https://www.takigawa-memo.com${meta.slug}`
    let title = `${meta.title} - TAKIGAWA MEMO`
    return (
      <>
        <StyledContainer>
          <Title>{meta.title}</Title>
          <Info>
            <Date>
              <h4>{meta.date}</h4>
            </Date>
            <Tags>{this.getTags(meta.tags)}</Tags>
          </Info>
          <Description>{meta.description}</Description>
          <Divider />
          <CustomImage fileName={meta.thumbnail.name} alt="thumbnail" />
          <ShareButtons url={url} title={title} />
          <Toc data={toc} />
          <AdSense />
          <Html dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </StyledContainer>
        <Copyright />
      </>
    )
  }
}
const StyledContainer = styled.div`
  padding-bottom: ${rhythm(4)};
  width: 90%;
  margin: auto;
`

const Html = styled.div`
  // padding-top: ${rhythm(2)};
  & p {
    font-size: ${scale(0).fontSize};
    line-height: ${rhythm(3 / 2)};
    margin: ${rhythm(1)} 0;
  }
  & li {
    font-size: ${scale(0).fontSize};
    line-height: ${rhythm(3 / 2)};
  }
  & tr {
    font-size: ${scale(0).fontSize};
    line-height: ${rhythm(1.2)};
  }
  & h2 {
    font-weight: bold;
    font-size: ${scale(1 / 2).fontSize};
    line-height: ${rhythm(2)};
    margin: ${rhythm(3 / 2)} 0;
  }
  & h3 {
    font-weight: bold;
    font-size: ${scale(1 / 6).fontSize};
    line-height: ${rhythm(2)};
    margin: ${rhythm(1)} 0;
  }

  @media (min-width: ${responsive.tablet.minWidth}) {
    & p {
      font-size: ${scale(0).fontSize};
      line-height: ${rhythm(3 / 2)};
      margin: ${rhythm(1)} 0;
    }
    & li {
      font-size: ${scale(1 / 8).fontSize};
      line-height: ${rhythm(2)};
    }
    & tr {
      font-size: ${scale(0).fontSize};
      line-height: ${rhythm(3 / 2)};
    }
    & h2 {
      font-size: ${scale(1 / 2).fontSize};
      line-height: ${rhythm(2)};
    }
    & h3 {
      font-weight: bold;
      font-size: ${scale(1 / 6).fontSize};
      line-height: ${rhythm(2)};
      margin: ${rhythm(1)} 0;
    }
  }
`
const Title = styled.h1`
  padding-top: ${rhythm(2)};
  font-size: ${scale(1).fontSize};
  line-height: ${rhythm(2)};
  font-weight: bold;
  margin-bottom: 0;

  @media (min-width: ${responsive.tablet.minWidth}) {
    padding-top: ${rhythm(4)};
    font-size: ${scale(3 / 2).fontSize};
    line-height: ${rhythm(3)};
  }
`
const Date = styled.div`
  & > h4 {
    font-size: ${scale(0).fontSize};
    line-height: ${rhythm(2)};
    text-align: center;
    color: #4b5454;
    margin: auto;
  }
`

const Description = styled.p`
  font-size: ${scale(0).fontSize};
  line-height: ${scale(0).lineHeight};
`

const Tags = styled.div`
  margin-left: ${rhythm(1 / 2)};
  height: ${rhythm(1)};
  line-height: ${rhythm(1)};
  align-self: center;
`

const Info = styled.div`
  display: flex;
  height: ${rhythm(2)};
`
