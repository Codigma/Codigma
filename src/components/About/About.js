import React, { Component } from 'react';

class Home extends Component {
  render(){
    return(
      <div className="w-100 mt-h container minHeight-vh">

        <div className="columns maxWidth-100 mx-0">
          <div className="column is-6 section">
            <div className="hero is-dark box section">
              <div className="title is-text-title has-text-warning">
                ¿Quienes somos?
              </div>
              <div className="is-text-content maxWidth-100" style= {{ width: "580px" }}>
                Somos una empresa de desarrollo tecnológico Web y Móvil, que brinda soluciones para las personas que desean incursionar en las tendencias tecnológicas. Diseñamos productos que puedan estar al alcance de todos  con interfaces ergonómicas.
              </div>
            </div>
          </div>
        </div>

        <div className="columns maxWidth-100 mx-0 is-col-align">
          <div className="column is-6 section pt-0 is-offset-6">
            <div className="hero is-dark box section">
              <div className="title is-text-title has-text-warning">
                Nuestra Misión
              </div>
              <div className="is-text-content maxWidth-100 " style= {{ width: "580px" }}>
                Ser una empresa seria, y dedicada a crear soluciones innovadoras  dirigidas a MiPymes que deseen facilitar sus labores cotidianas mediante la implementación de las nuevas tendencias tecnológicas.

                <br/>
                <br/>

                Desarrollamos aplicaciones de ámbito web y móvil que les permitan mejorar sus procesos, reducir tiempos y facilitar sus tareas durante las jornadas laborales.
              </div>
            </div>
          </div>
        </div>

        <div className="columns maxWidth-100 mx-0 is-col-align">
          <div className="column is-6 section pt-0">
            <div className="hero is-dark box section">
              <div className="title is-text-title has-text-warning">
                Nuestra Visión
              </div>
              <div className="is-text-content maxWidth-100 " style= {{ width: "580px" }}>
                Ser una compañía líder estatal, elegida por su alta capacidad de trabajo y compromiso en la provisión de soluciones innovadoras.
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
