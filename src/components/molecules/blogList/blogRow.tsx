import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Image from "../../atoms/image"
import Tag from "../../atoms/tag"
import { rhythm, scale } from "../../../utils/typography"
import { responsive } from "../../../../config"

type Props = {
  title: string
  slug: string
  description: string
  date: string
  tags: string[]
  thumbnail: string
}

const BlogRow: React.FC<Props> = ({ title, slug, description, date, tags, thumbnail }) => (
  <Container>
    <ImageContainer>
      <Image fileName={thumbnail} alt="thumbnail" />
    </ImageContainer>
    <PageData>
      <StyledLink to={slug}>{title}</StyledLink>
      <Info>
        <Date>{date}</Date>
        <div>{tags.map(tag => <Tag>{tag}</Tag>)}</div>
      </Info>
      <Description>{description}</Description>
    </PageData>
  </Container>
)

const Container = styled.div({
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    display: "flex"
  }
})

const ImageContainer = styled.div({
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    width: rhythm(8),
    marginRight: rhythm(2)
  }
})

const PageData = styled.div({
  [`@media (min-width: ${responsive.tablet.minWidth}px)`]: {
    margin: "auto",
    width: "100%"
  }
})

const StyledLink = styled(Link)({
  color: "#3273dc",
  fontSize: scale(3 / 4).fontSize,
  fontWeight: "bold",
  lineHeight: rhythm(3 / 2)
})

const Info = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginTop: rhythm(1 / 4)
})

const Description = styled.p({
  fontSize: scale(0).fontSize,
  lineHeight: `${rhythm(1)} !important`,
  margin: `${rhythm(1 / 2)} 0 0 0 !important`,
})

const Date = styled.h4({
  fontSize: scale(0).fontSize,
  lineHeight: rhythm(1),
  paddingTop: rhythm(1 / 7),
  marginBottom: 0,
  color: "#4b5454"
})

export default BlogRow