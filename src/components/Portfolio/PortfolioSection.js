import React, { Component } from 'react';

class PortfolioSection extends Component {


  render() {
    return(
      <section id={ this.props.id } style={{ paddingTop: "38px" }}>
        <div className="section">
            <h1 className="title text-portfolio has-text-warning">
              { this.props.title }
            </h1>
            <h2 className="subtitle text-portfolio">
              { this.props.subtitle }
            </h2>
          </div>
          <div className="childcito">
            { this.props.children }
          </div>
          <hr className="my-0 has-background-dark"/>
      </section>
    );
  }
}

export default PortfolioSection;
