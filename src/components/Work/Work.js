import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import image1 from '../../img/imagen2.jpg';

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
            <div className={ "is-absolute w-100 is-card-back section is-centered " + ( this.state.active ? 'is-back-active' : '' ) }>
              <div className="h-100 is-flex flexWrap">
                <div className="is-flex is-centered is-vcentered w-100">
                  <h4 className="has-text-white mb-5 has-text-centered">Conoce nuestro trabajo</h4>
                </div>
              </div>
            </div>
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
                <Link to={ this.props.link } className="button is-white is-rounded has-text-dark">Ver más</Link>
                  <i className={ "fas fa-2x fa-angle-double-right is-arrow has-text-white " + ( this.state.active ? 'is-back-active' : '' ) }></i>
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
        <div className="w-100 h-100 is-relative"  style={{ height:"450px" }}>
          <div className="is-absolute minWidth-vw w-100" style={{ height: "450px", overflow: "hidden" }}>
            <img src={ image1 } alt="img-about" className="is-absolute minHeight-100 minWidth-vw" style={{ zIndex: "-1", transform: "scaleY(1.1)", transformOrigin: "center" }}/>
            <div className="is-flex is-centered is-vcentered w-100" style={{ height: "400px" }}>
              <h1 className="title is-1 has-text-white" style={{ zIndex:"1" }}>Servicios</h1>
            </div>
          </div>
        </div>
        <div className="container section">
          <div className="tile ancestor is-centered flexWrap">
            <Card
              icon = "fas fa-3x fa-mobile-alt"
              title = "Aplicaciones móviles"
              link = "/nosotros"
              >
              <li>Desarrollamos aplicaciones para IOS y Android.</li>
              <li>Las adaptamos a tus necesidades y con el mejor diseño para ti.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-cart-arrow-down"
              title = "Sitio de ventas online"
              link = "/nosotros"
              >
              <li>Desarrollamos aplicaciones para IOS y Android.</li>
              <li>La adaptamos a tus necesidades y con el mejor diseño para ti.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-images"
              title = "Contenido digital"
              link = "/nosotros"
              >
              <li>Desarrollamos aplicaciones para IOS y Android.</li>
              <li>La adaptamos a tus necesidades y con el mejor diseño para ti.</li>
            </Card>
          </div>

          <div className="tile ancestor is-centered flexWrap">

            <Card
              icon = "fas fa-3x fa-paint-brush"
              title = "Diseño gráfico"
              link = "/nosotros"
              >
              <li>Te creamos el logo de tu empresa.</li>
              <li>Diseñamos lo que necesites.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-desktop"
              title = "Programas de escritorio"
              link = "/nosotros"
              >
              <li>Te creamos el logo de tu empresa.</li>
              <li>Diseñamos lo que necesites.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-globe"
              title = "Página web para tu negocio"
              link = "/nosotros"
              >
              <li>Creamos páginas web para que muestres lo que haces.</li>
              <li>Haz publicidad a tu negocio.</li>
            </Card>

          </div>
          <div className="tile ancestor is-centered flexWrap">

            <Card
              icon = "fas fa-3x fa-users-cog"
              title = "Asesoramiento técnico"
              link = "/nosotros"
              >
              <li>Creamos páginas web para que muestres lo que haces.</li>
              <li>Haz publicidad a tu negocio.</li>
            </Card>

            <Card
              icon = "fas fa-3x fa-graduation-cap"
              title = "Innovación para todos"
              link = "/nosotros"
              >
              <li>Creamos páginas web para que muestres lo que haces.</li>
              <li>Haz publicidad a tu negocio.</li>
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
