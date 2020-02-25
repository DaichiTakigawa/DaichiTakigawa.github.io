import React from "react"

export default class Adsense extends React.Component {
  componentDidMount() {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({})
  }
  render() {
    return (
      <div>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6195920683902846"
          data-ad-slot="4511974705"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    )
  }
}
