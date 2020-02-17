import React from "react"
import Helmet from "react-helmet"

export default class Seo extends React.Component {
  constructor(props) {
    super(props)

    this.title = this.props.title
      ? this.props.title + " - TAKIGAWA MEMO"
      : "TAKIGAWA MEMO"
    this.description = this.props.description
  }

  getGOP() {
    let title = this.title
    let description = this.description
    let isPostPage = this.props.isPostPage
    let url = this.props.url
    let imageUrl = this.props.imageUrl
    let facebookAppId = "132563744601547"
    let GOP
    if (isPostPage) {
      GOP = (
        <div>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="article" />
          <meta
            property="og:site_name"
            content="たきがわのメモ - TAKIGAWA MEMO"
          />
          <meta property="og:image" content={imageUrl} />
          <meta property="fb:app_id" content={facebookAppId} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="bob_yama" />
        </div>
      )
    }
    return GOP
  }

  render() {
    let title = this.title
    let description = this.description
    let GOP = this.getGOP()

    return (
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="b_z5TAwrxYIo9jF886d31cgslCs-bgVKEzzpfYzDEsU"
        />
        <meta name="author" content="Daichi Takigawa" />
        <meta name="description" content={description} />
        {GOP ? GOP.props.children : null}
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        ></script>
        <link
          href="//fonts.googleapis.com/css?family=Noto+Sans+JP:400,700?display=swap"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Helmet>
    )
  }
}
