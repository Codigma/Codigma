import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import image1 from '../../img/imagen11.jpg';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (

      <div className="tile is-vertical is-tile-padding is-4 minWidth-300">
        <div className="tile is-parent is-tile-top-padding">
          <div className="tile is-child notification is-white content is-card-mobile" onClick={ e => this.handleClick(e) }>
            <div className="is-flex is-centered has-text-warning">
              <i className={ this.props.icon }></i>
            </div>
            <p className="has-text-centered has-text-warning">
              <strong>{ this.props.title }</strong>
              <br/>
            </p>
            <ul className="has-text-justify" style={{ marginBottom: "4rem" }}>
              { this.props.children }
            </ul>
            <div className="is-flex is-centered is-vcentered">
              <div className="is-absolute" style={{ bottom: "21px" }}>
                <a href={ this.props.link } className="button is-white is-rounded has-text-dark">Ver más</a>
                  <i className={ "fas fa-2x fa-angle-double-right is-arrow has-text-warning " }></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: []
    }
  }

  handleClick(e, id) {
    this.setState(

    )
  }

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
          <h1 className="title has-text-white is-absolute is-flex is-vcentered h-100 has-text-centered w-100 is-centered" style={{ zIndex: "1", left: "0", top: "0" }}><span className="typedtext2">Servicios</span></h1>
          <img src={ image1 } alt="img" className="is-absolute is-cero w-100 minWidth-vw minHeight-100" style={{ transform: "scale3d(1.1, 1, 1)", transformOrigin: "center center 0" }}/>
        </div>
        <div className="container section">
          <div className="tile ancestor is-centered flexWrap">
            <Card
              icon = "fas fa-3x fa-mobile-alt"
              title = "Aplicaciones móviles"
              link = "/portafolio/#IosAndroid"
              >
              <li>Desarrollamos aplicaciones para IOS y Android.</li>
              <li>Las adaptamos a tus necesidades y con el mejor diseño para ti.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-cart-arrow-down"
              title = "Sitio de ventas online"
              link = "/portafolio/#VentaOnline"
              >
              <li>Traslada tu negocio a la internet.</li>
              <li>Vende más y haz que más gente conozca tus productos.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-paint-brush"
              title = "Diseño gráfico"
              link = "/portafolio/#DisenoGrafico"
              >
              <li>Creamos o modificamos el logo de tu empresa.</li>
              <li>Diseñamos lo que necesites.</li>
            </Card>

          </div>

          <div className="tile ancestor is-centered flexWrap">

            <Card
              icon = "fas fa-3x fa-images"
              title = "Contenido digital"
              link = "/portafolio/#VideoCreativo"
              >
              <li>Videos creativos para tu negocio.</li>
              <li>Carteles promocionales.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-desktop"
              title = "Programas de escritorio"
              link = "/portafolio/#PuntosVenta"
              >
              <li>Puntos de venta.</li>
              <li>Programas a la medida para tu computadora de escritorio.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-globe"
              title = "Página web para tu negocio"
              link = "/portafolio/#PaginaInformativa"
              >
              <li>Creamos páginas web para que muestres lo que haces.</li>
              <li>Haz publicidad en la red tu negocio.</li>
            </Card>

          </div>
          <div className="tile ancestor is-centered flexWrap">

            <Card
              icon = "fas fa-3x fa-users-cog"
              title = "Asesoramiento técnico"
              link = "/portafolio/#AsistenciaNegocios"
              >
              <li>Si necesitas ayuda con tu nuevo gadget nosotros te asesoramos.</li>
              <li>Nos preocupamos porque tus procesos trabajen bien.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-graduation-cap"
              title = "Innovación para todos"
              link = "/portafolio/#SiempreInnovando"
              >
              <li>Inventamos tecnología para todos.</li>
              <li>Siempre investigando sobre lo nuevo para ti.</li>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Work;
