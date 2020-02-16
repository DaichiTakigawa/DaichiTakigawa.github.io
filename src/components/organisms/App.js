import React from "react"
import "semantic-ui-less/semantic.less"
// import "../../styles/style.scss"

export default class App extends React.Component {
  render() {
    return <>{this.props.children}</>
  }
}
