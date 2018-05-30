import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import PortfolioSection from './PortfolioSection';

class Portfolio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.match.params.id !== this.props.match.params.id) {
       this.onRouteChanged(nextProps.match.params.id);
    }
}

  componentDidUpdate(prevProps) {
    //if (this.props.location !== prevProps.location) {
      //this.onRouteChanged();
    //}
  }

  onRouteChanged(id) {
    window.scrollTo(0, (document.getElementById(id).getBoundingClientRect().y) - 70);
  }

  somemethod(){

  }

  render(){
    return(
      <div className="w-100">
        <Header
        home = { false }
        />
        <div className="mt-h w-100">
          <div className="columns m-0 w-100 mt-h">
            <div className="column is-one-fifth is-hidden-touch">
              <aside className="menu is-fixed column is-one-fifth p-4 portfolio-bar" style={{ top: "70px", bottom: "0", left: "0", right: "auto", overflow: "hidden" }}>
                <p className="menu-label">
                  Soluciones
                </p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/portafolio/recientes"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Más Recientes
                    </NavLink>
                  </li>
                </ul>
                <p className="menu-label">
                  Aplicaciones Móviles
                </p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/portafolio/ios&android"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    IOS Y Android
                    </NavLink>
                  </li>
                </ul>
                <p className="menu-label">
                  Sitios Web
                </p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/portafolio/venta-online"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Venta Online
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/portafolio/pagina-informativa"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Página Informativa
                    </NavLink>
                  </li>
                </ul>
                <p className="menu-label">
                  Diseños
                </p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/portafolio/diseño-grafico"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Diseño Gráfico
                    </NavLink>
                  </li>
                    <ul>
                      <li>
                        <NavLink to="/portafolio/logos"
                        activeClassName="is-active"
                        onClick={ (e) => this.somemethod(e) }>
                        Logos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/portafolio/tarjetas-de-presentacion"
                        activeClassName="is-active"
                        onClick={ (e) => this.somemethod(e) }>
                        Tarjetas De Presentación
                        </NavLink>
                      </li>
                    </ul>
                  <li>
                    <NavLink to="/portafolio/video-creativo"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Video Creativo
                    </NavLink>
                  </li>
                </ul>
                <p className="menu-label">
                  Desarrollo De Software
                </p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/portafolio/puntos-de-venta"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Puntos De Venta
                    </NavLink>
                  </li>
                </ul>
                <p className="menu-label">
                  Asesoramiento Técnico
                </p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/portafolio/asistencia-a-negocios"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Asistencia A Negocios
                    </NavLink>
                  </li>
                </ul>
                <p className="menu-label">
                  Innovación
                </p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/portafolio/siempre-innovando"
                    activeClassName="is-active"
                    onClick={ (e) => this.somemethod(e) }>
                    Siempre Innovando
                    </NavLink>
                  </li>
                </ul>
              </aside>
            </div>


            <div className="column is-four-fifth-desktop is-12-touch is-relative">
              <PortfolioSection
              id = "recientes"
              title = "Más Recientes"
              subtitle = "(No actualizado)"
              >

              </PortfolioSection>
              <PortfolioSection
              id = "ios&android"
              title = "IOS Y Android"
              subtitle = "Creamos aplicaciones para teléfonos móviles en los sistemas operativos más populares del momento."
              >
              <div className="section">
                <i className="fab fa-android"></i>
              </div>
              <div className="section">
                <h1 className="subtitle is-6">Algunos ejemplos de aplicacioes son:</h1>
                <p>
                  https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping
                </p>
              </div>
              </PortfolioSection>
              <PortfolioSection
              id = "venta-online"
              title = "Venta Online"
              subtitle = "(No actualizado)"
              >

              </PortfolioSection>

              <PortfolioSection
              id = "pagina-informativa"
              title = "Página Informativa"
              subtitle = "(No actualizado)"
              >

              </PortfolioSection>

              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
