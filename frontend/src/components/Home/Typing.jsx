import React, { Component } from 'react'
import Typed from 'typed.js'

export default class Typing extends Component {
  componentDidMount() {
    const { strings } = this.props
    const options = {
      strings: strings,
      typeSpeed: 120,
      backSpeed: 130,
      backDelay: 3500
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <span className='type-wrap'>
        <span
          style={{ whiteSpace: 'pre' }}
          ref={el => {
            this.el = el
          }}
        />
      </span>
    )
  }
}
