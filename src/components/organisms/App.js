import React from "react"
import "../../styles/style.scss"

export default class App extends React.Component {
  render() {
    return <>{this.props.children}</>
  }
}
