import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import imagen2 from '../../img/imagen8.jpg'

class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className="w-100">
        <Header
        home = { true }
        />
        <div className="is-relative w-100 minHeighth-100" style={{ overflow: "hidden" }}>
          <div className="slider w-100 minHeight-vh">
            <div className="slide" />
            <div className="slide" />
            <div className="slide" />
            <div className="slide" />
            <div className="slide" />
          </div>
          <div className="is-absolute is-cero has-text-centered" style={{ marginTop: "22vh" }}>
            <svg className="has-text-white w-100 p-4" style={{ fill: "currentColor", maxWidth: "350px" }}>
              <use href="#logo" />
            </svg>
            <h1 className="title is-5 has-text-white mx-auto px-3" style={{ letterSpacing: "0.2em", maxWidth: "440px" }}>Diseño gráfico, Desarrollo Web y Móvil</h1>
          </div>
        </div>
        <div className="w-100 has-background-white py-5">
          <div className="columns is-centered my-0 maxWidth-100 mx-0">
            <div className="column is-narrow">
              <h1 className="title has-text-centered">Acerca de Codigma</h1>
            </div>
          </div>
          <div className="columns multiline is-centered section pt-4 maxWidth-100 m-0">
            <div className="column is-7">
              <p className="subtitle is-main-text">
                <b><Link to="/" className="has-text-warning">Codigma</Link></b> nace de la idea un grupo de amigos apasionados por la tecnología que vieron la necesidad de renovar los procesos con los que trabajaban los negocios de su ciudad natal. Bridamos soluciones que implementan nuevas tecnologías permitiendo optimizar tiempos y aumentar ganancias. <Link to="/nosotros" className="flexNoWrap has-text-link">Leer más...</Link>
              </p>
            </div>
          </div>

          <div className="w-100 section">
            <div className="columns is-centered mx-0 maxWidth-100">
              <div className="column is-half">
                <h1 className="subtitle has-text-centered">Sabemos que tienes muchas ideas, y en codigma las valoramos, es por eso que creamos nuestro lema.</h1>
              </div>
            </div>
            <div className="columns is-centered mx-0 maxWidth-100">
              <div className="column is-narrow">
                <h1 className="subtitle is-italic has-text-centered"><strong className="has-text-warning">"Confía en tus ideas"</strong></h1>
                <h1 className="subtitle has-text-centered">Nosotros las hacemos realidad.</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 section">
          <div className="columns is-centered mx-0 maxWidth-100">
            <div className="column is-narrow">
              <h1 className="title has-text-centered pb-2 is-bold">Nuestros servicios</h1>
            </div>
          </div>
          <div className="columns is-centered is-multiline mx-0 maxWidth-100">
            <div className="column is-8 p-4 columns is-multiline is-centered m-0">
              <div className="column is-one-third is-flex is-centered is-vcentered flexWrap">
                <div className="w-100 is-flex is-vcentered is-centered">

                  <div className="has-background-warning is-flex is-vcentered is-centered is-shadow" style= {{ width: "100px", height: "100px", borderRadius: "50%" }}>
                    <i className="fas fa-3x fa-mobile-alt"></i>
                  </div>
                </div>
                <p className="has-text-centered title is-5 pt-3 has-text-warning">
                  Apps Móviles
                </p>
              </div>

              <div className="column is-one-third is-flex is-centered is-vcentered flexWrap">
                <div className="w-100 is-flex is-vcentered is-centered">
                  <div className="has-background-warning is-flex is-vcentered is-centered is-shadow" style= {{ width: "100px", height: "100px", borderRadius: "50%" }}>
                    <i className="fas fa-3x fa-globe"></i>
                  </div>
                </div>
                <p className="has-text-centered title is-5 pt-3 has-text-warning">
                  Páginas Web
                </p>
              </div>
              <div className="column is-one-third is-flex is-centered is-vcentered flexWrap">
                <div className="w-100 is-flex is-vcentered is-centered">
                  <div className="has-background-warning is-flex is-vcentered is-centered is-shadow" style= {{ width: "100px", height: "100px", borderRadius: "50%" }}>
                    <i className="fas fa-3x fa-paint-brush"></i>
                  </div>
                </div>
                <p className="has-text-centered title is-5 pt-3 has-text-warning">
                  Diseño Gráfico
                </p>
              </div>
            </div>
            <div className="column is-half has-text-centered">
              <Link to="/servicios" className="button is-dark is-rounded">Ver más</Link>
            </div>
          </div>
        </div>

        <div className="columns section has-background-white is-multiline is-centered m-0">
          <div className="column is-12 columns is-centered is-relative m-0" style= {{ height: "100vw", overflow: "hidden", maxHeight: "668px", transformOrigin: "center center 0", borderRadius: "16px" }}>
            <h1 className="title has-text-white is-absolute is-flex is-vcentered h-100 has-text-centered w-100 is-centered" style={{ zIndex: "1", left: "0", top: "0" }}>Conoce nuestro trabajo</h1>
            <img src={ imagen2 } alt="img" className="is-absolute is-cero w-100 minWidth-vw minHeight-100" style={{ transform: "scale3d(1.2, 1, 1)", transformOrigin: "center center 0" }}/>
          </div>
          <div className="column is-12 has-text-centered">
            <Link to="/portafolio/recientes" className="button is-dark is-rounded">Ir al portafolio</Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
