import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import image1 from '../../img/imagen4.jpg';

class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return(
      <div className="w-100">
        <Header
        home = { true }
        />
        <div className="w-100">
          <div className="w-100 h-100 is-relative"  style={{ height:"450px" }}>
            <div className="is-absolute minWidth-vw w-100" style={{ height: "450px", overflow: "hidden" }}>
              <img src={ image1 } alt="img-about" className="is-absolute minHeight-100 minWidth-vw" style={{ zIndex: "-1", transform: "scaleY(1.1)", transformOrigin: "center" }}/>
              <div className="is-flex is-centered is-vcentered w-100" style={{ height: "400px" }}>
                <h1 className="title is-1 has-text-white" style={{ zIndex:"1" }}>Conócenos</h1>
              </div>
            </div>
          </div>
          <div className="columns has-background-white-white is-multiline is-centered m-0">
            <div className="column is-8 section">
              <h1 className="title is-text-title">¿Quiénes Somos?</h1>
              <div className="is-text-content maxWidth-100">
                Somos una empresa de desarrollo tecnológico Web y Móvil, que brinda soluciones para las personas que desean incursionar en las tendencias tecnológicas. Diseñamos productos que puedan estar al alcance de todos.
              </div>
            </div>

            <div className="column is-8 section">
              <h1 className="title is-text-title">Nuestra Misión</h1>
              <div className="is-text-content maxWidth-100 ">
                Ser una empresa seria, y dedicada a crear soluciones innovadoras  dirigidas a MiPymes que deseen facilitar sus labores cotidianas mediante la implementación de las nuevas tendencias tecnológicas.

                <br/>
                <br/>

                Desarrollamos aplicaciones de ámbito web y móvil que les permitan mejorar sus procesos, reducir tiempos y facilitar sus tareas durante las jornadas laborales.
              </div>
            </div>

            <div className="column is-8 section">
              <h1 className="title is-text-title">Nuestra Visión</h1>
              <div className="is-text-content maxWidth-100 ">
                Ser una compañía líder estatal, elegida por su alta capacidad de trabajo y compromiso en la provisión de soluciones innovadoras.
              </div>
            </div>

          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
