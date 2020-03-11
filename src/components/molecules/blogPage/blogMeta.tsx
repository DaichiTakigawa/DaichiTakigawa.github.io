import * as React from "react"
import styled from "@emotion/styled"

import Tag from "../../atoms/tag"
import { rhythm, scale } from "../../../utils/typography"
import { responsive } from "../../../../config"

type Props = {
  title: string
  date: string
  tags: string[]
  description: string
}

const BlogMeta: React.FC<Props> = ({ title, date, tags, description }) => (
  <>
    <Title>{title}</Title>
    <Info>
      <div>
        <Date>{date}</Date>
      </div>
      <Tags>
        {tags.map(tag => <Tag>{tag}</Tag>)}
      </Tags>
    </Info>
    <Description>{description}</Description>
  </>
)

const Title = styled.h1({
  paddingTop: rhythm(2),
  fontSize: scale(1).fontSize,
  lineHeight: rhythm(2),
  fontWeight: "bold",
  marginBottom: 0,
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    paddingTop: rhythm(4),
    fontSize: scale(3 / 2).fontSize,
    lineHeight: scale(3 / 2).lineHeight
  }
})

const Date = styled.h4({
  fontSize: scale(0).fontSize,
  lineHeight: rhythm(2),
  textAlign: "center",
  color: "#4b5454",
  margin: "auto"
})

const Tags = styled.div({
  marginLeft: rhythm(1 / 2),
  lineHeight: rhythm(1),
  alignSelf: "center",
})

const Description = styled.p({
  fontSize: `${scale(0).fontSize} !important`,
  lineHeight: `${scale(0).lineHeight} !important`,
  margin: "0 !important"
})

const Info = styled.div({
  display: "flex",
  paddingTop: rhythm(1 / 4)
})


export default BlogMeta