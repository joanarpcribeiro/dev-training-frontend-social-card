import React, { Component } from 'react'
import './Tooltip.css'

export default class Tooltip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    }
    this.hover = this.hover.bind(this)
    this.unhover = this.unhover.bind(this)
  }
  hover() {
    this.setState({
      isHovered: true
    })
  }
  unhover() {
    this.setState({
      isHovered: false
    })
  }
  render() {
    let className = "Tooltip"
    if (this.props.className) className += " " + this.props.className
    return <div className={className} onMouseEnter={this.hover} onMouseLeave={this.unhover}>
      {this.props.children}
      {this.state.isHovered && <div className="Tooltip__box">{this.props.text}</div>}
    </div>
  }
}
