import React from "react"
import Helmet from "react-helmet"

export default class Seo extends React.Component {
  render() {
    let title = this.props.title
      ? this.props.title + " - TAKIGAWA'S MEMO"
      : "TAKIGAWA'S MEMO"
    let description = this.props.description ? this.props.description : "備忘録"

    return (
      <Helmet
        title={title}
        meta={[
          {
            name: "description",
            content: { description },
            charSet: "utf-8",
          },
        ]}
      />
    )
  }
}
