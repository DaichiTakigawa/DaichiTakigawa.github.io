import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import { Responsive, Divider, Icon, Label } from "semantic-ui-react"
import { scale, rhythm } from "../../utils/typography"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                description
                slug
                date(formatString: "YYYY.MM.DD")
                tags
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
    console.log(edges)
    return edges.map(obj => {
      let info = obj.node.frontmatter
      console.log(info.description)
      return <Item info={info} />
    })
  }

  render() {
    return (
      <Segment>
        <StyledContainer>
          <Responsive as={Title} minWidth={Responsive.onlyTablet.minWidth}>
            Blog
          </Responsive>
          <Responsive
            as={MobileTitle}
            maxWidth={Responsive.onlyMobile.maxWidth}
          >
            Blog
          </Responsive>
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
            verticalAlign: "text-bottom",
            marginRight: rhythm(1 / 2),
            float: "right",
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
    console.log(tags)
    return (
      <div>
        <StyledLink to={slug}>{title}</StyledLink>
        <Info>
          <Date>
            {date}
            {this.getTags(tags)}
          </Date>
        </Info>
        <Description>{description}</Description>
        <Divider />
      </div>
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
  width: 80%
`

const Title = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(3)}
  color: #333333
  padding-top: ${rhythm(2)}
  margin-bottom: 0
`

const MobileTitle = styled.h1`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  color: #333333
  padding-top: ${rhythm(1)}
`

const StyledDivider = styled(Divider)`
  margin-top: 0 !important;
`

const StyledLink = styled(Link)`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
`
const Info = styled.div`
  margin-top: ${rhythm(1 / 2)};
`

const Description = styled.div`
  font-size: ${scale(0).fontSize}
  line-height: ${rhythm(1)}
  margin-top: ${rhythm(1 / 2)}
`

const Date = styled.h2`
  font-size: ${scale(0).fontSize}
  line-height: ${rhythm(1)}
  color:  #4b5454
`
