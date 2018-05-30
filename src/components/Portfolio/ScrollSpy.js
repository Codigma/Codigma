import React, { Component, createElement } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types';

// usage:
// import { ScrollSpy, Link } = './wherever-this-file-is'
//
// <ScrollSpy>
//   <Link ref={c => this._firstLink = c} section="1">Section 1</Link>
//   <Link section="2">Section 2</Link>
//   <Link section="3">Section 3</Link>
// </ScrollSpy>
// <section id="1">
//   ...
// </section>
// <section id="2">
//   ...
// </section>
// <section id="3">
//   ...
// </section>

export class ScrollSpy extends Component {
  static childContextTypes = {
    scrollSpy: PropTypes.object
  }

  state = {
    sections: [],
    currentSection: null
  }

  getChildContext() {
    return {
      scrollSpy: {
        registerLink: this._registerLink,
        currentSection: this.state.currentSection
      }
    }
  }

  componentDidMount() {
    this._setCurrentSection()
    window.addEventListener('scroll', this._setCurrentSection)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._setCurrentSection)
  }

  _registerLink = (section) => {
    const { sections } = this.state
    sections.push(document.getElementById(section))
    this.setState({ sections })
  }

  _setCurrentSection = () => {
    const { sections } = this.state
    const sectionCount = sections.length

    if (!sectionCount) return;

    let currentSection = this.props.defaultSection ? sections[0].id : null

    for (let i = 0; i < sectionCount; i++) {
      const section = sections[i]
      if (window.pageYOffset > section.offsetTop) {
        currentSection = section.id
      }
    }

    this.setState({ currentSection })
  }

  render() {
    return this.props.children
  }
}

export class Link extends Component {
  static contextTypes = {
    scrollSpy: PropTypes.object
  }

  static propTypes = {
    section: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.context.scrollSpy.registerLink(this.props.section)
  }

  render() {
    const { section, className, children, ...restProps } = this.props
    const isCurrent = (section === this.context.scrollSpy.currentSection)
    let classes = className || ''

    if (typeof children === 'function') {
      return children(isCurrent)
    }

    if (isCurrent) {
      classes += ' is-current'
    }

    return createElement('a', {
      href: `#${section}`,
      className: classes,
      ...restProps
    }, children)
  }
}
