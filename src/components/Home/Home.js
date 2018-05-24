import React, { Component } from 'react';
import logo2 from '../../img/logo7.png';

class Home extends Component {
  render(){
    return(
      <div className="w-100 minHeight-vh">
        <div className="hero is-fullheight is-dark">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="logo-home">
                <img src={ logo2 } alt="logo2" className="w-100" />
              </div>
              <div className="section title px-0">
                "Diseño gráfico, desarrollo web y móvil."
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
