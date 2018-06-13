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
          <div className="w-100 h-100 is-relative theback" style= {{ height: "100vw", overflow: "hidden", maxHeight: "450px", transformOrigin: "center center 0" }}>
            <h1 className="title has-text-white is-absolute is-flex is-vcentered h-100 has-text-centered w-100 is-centered" style={{ zIndex: "1", left: "0", top: "0" }}><span className="typedtext1">Conócenos</span></h1>
            <img src={ image1 } alt="img" className="is-absolute is-cero w-100 minWidth-vw minHeight-100" style={{ transform: "scale3d(1.2, 1, 1)", transformOrigin: "center center 0" }}/>
          </div>


          <div className="columns has-background-white-white is-multiline is-centered m-0">
            <div className="column is-8 section">
              <h1 className="title is-text-title has-text-warning">¿Quiénes Somos?</h1>
              <div className="is-text-content maxWidth-100">
                Somos una empresa de desarrollo tecnológico Web y Móvil, que brinda soluciones para las personas que desean incursionar en las tendencias tecnológicas. Diseñamos productos que puedan estar al alcance de todos.
              </div>
            </div>

            <div className="column is-8 section">
              <h1 className="title is-text-title has-text-warning">Nuestra Misión</h1>
              <div className="is-text-content maxWidth-100 ">
                Ser una empresa seria y dedicada a crear soluciones innovadoras  dirigidas a MiPymes que deseen facilitar sus labores cotidianas mediante la implementación de las nuevas tendencias tecnológicas.

                <br/>
                <br/>

                Desarrollamos aplicaciones de ámbito web y móvil que les permitan mejorar sus procesos, reducir tiempos y facilitar sus tareas durante las jornadas laborales.
              </div>
            </div>

            <div className="column is-8 section">
              <h1 className="title is-text-title has-text-warning">Nuestra Visión</h1>
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
