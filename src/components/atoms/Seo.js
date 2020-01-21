import React from "react"
import Helmet from "react-helmet"

export default class Seo extends React.Component {
  render() {
    let title = this.props.title
      ? this.props.title + " - TAKIGAWA MEMO"
      : "TAKIGAWA MEMO"
    let description = this.props.description

    return (
      <Helmet
        title={title}
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            name: "author",
            content: "Daichi Takigawa",
          },
          {
            name: "google-site-verification",
            content: "b_z5TAwrxYIo9jF886d31cgslCs-bgVKEzzpfYzDEsU",
          },
        ]}
      >
        <html lang="ja" />
      </Helmet>
    )
  }
}