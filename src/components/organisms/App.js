import React from "react"
import "semantic-ui-less/semantic.less"

export default class App extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}
