import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import { Responsive, Divider, Label } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

import CutomImage from "../atoms/CustomImage"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                description
                slug
                date(formatString: "YYYY.MM.DD")
                tags
                thumbnail {
                  name
                }
              }
            }
          }
        }
      }
    `}
    render={data => <BlogList data={data} />}
  />
)

class BlogList extends React.Component {
  constructor(props) {
    super(props)
    this.data = props.data
  }

  getlist() {
    let edges = this.data.allMarkdownRemark.edges
    return edges.map(obj => {
      let info = obj.node.frontmatter
      return <Item info={info} />
    })
  }

  render() {
    return (
      <Segment>
        <StyledContainer>
          <Title>Blog</Title>
          <StyledDivider />
          {this.getlist()}
        </StyledContainer>
      </Segment>
    )
  }
}

class Item extends React.Component {
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
    let info = this.props.info
    let title = info.title
    let slug = info.slug
    let description = info.description
    let date = info.date
    let tags = info.tags
    let name = info.thumbnail.name
    return (
      <>
        <Container>
          <ImgContainer>
            <CutomImage fileName={name} alt="thumbnail" />
          </ImgContainer>
          <PageData>
            <StyledLink to={slug}>{title}</StyledLink>
            <Info>
              <Date>{date}</Date>
              <div>{this.getTags(tags)}</div>
            </Info>
            <Description>{description}</Description>
          </PageData>
        </Container>
        <Divider />
      </>
    )
  }
}

const Segment = styled.div`
  background-color: white
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 5px;
`

const StyledContainer = styled.div`
  padding-top: ${rhythm(2)}
  padding-bottom: ${rhythm(4)}
  margin: auto
  width: 80%
`

const Container = styled.div`
  @media (min-width: ${Responsive.onlyTablet.minWidth}px) {
    display: flex;
  }
`

const ImgContainer = styled.div`
  @media (min-width: ${Responsive.onlyTablet.minWidth}px) {
    width: ${rhythm(8)}
    margin-right: ${rhythm(2)}
  }
`

const PageData = styled.div`
  @media (min-width: ${Responsive.onlyTablet.minWidth}px) {
    margin: auto
    width: 100%
  }
`

const Title = styled.h1`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  color: rgb(70, 70, 70);
  padding-top: ${rhythm(1)}

  @media (min-width: ${Responsive.onlyTablet.minWidth}px) {
    font-size: ${scale(1).fontSize}
    line-height: ${rhythm(3)}
    padding-top: ${rhythm(2)}
    margin-bottom: 0
  }
`

const StyledDivider = styled(Divider)`
  margin-top: 0 !important;
`

const StyledLink = styled(Link)`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
`
const Info = styled.div`
  display: flex
  justify-content: space-between
  margin-top: ${rhythm(1 / 4)}
`

const Description = styled.p`
  font-size: ${scale(0).fontSize}
  line-height: ${rhythm(1)}
  margin-top: ${rhythm(1 / 4)}
`

const Date = styled.h4`
  font-size: ${scale(0).fontSize}
  line-height: ${rhythm(1)}
  padding-top: ${rhythm(1 / 7)}
  margin-bottom: 0
  color:  #4b5454
`
