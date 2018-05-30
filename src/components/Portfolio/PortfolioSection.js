import React, { Component } from 'react';

class PortfolioSection extends Component {


  render() {
    return(
      <section id={ this.props.id } className="has-background-light mb-3">
        <div className="section">
            <h1 className="title">
              { this.props.title }
            </h1>
            <h2 className="subtitle">
              { this.props.subtitle }
            </h2>
          </div>
          { this.props.children }
      </section>
    );
  }
}

export default PortfolioSection;
