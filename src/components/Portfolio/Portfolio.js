import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Scrollspy from 'react-scrollspy'

import PortfolioSection from './PortfolioSection';

import image1 from '../../img/genesysmi.PNG';
import image2 from '../../img/codigma.PNG';
import image3 from '../../img/portada6.svg';
import image4 from '../../img/triptico.jpg';
import image5 from '../../img/logotipo.png';
import image6 from '../../img/logotipo1.png';
import image8 from '../../img/puntoventa.PNG';
import image9 from '../../img/logotipo4.png';
import image10 from '../../img/tarjeta.png';
import image11 from '../../img/volante1.png';
import image12 from '../../img/volante2.png';

class Portfolio extends Component {
  constructor(props){
    super(props);

    this.state = {
      selected : "#Recientes"
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location.hash !== nextProps.location.hash){
      this.setState({
        selected: nextProps.location.hash
      })
    }
  }

  setActiveOption = () => {
    if(this.props.location.hash !== this.state.selected){
      this.setState({
        selected: this.props.location.hash
      })
    }
  }

  render(){
    return(
      <div className="w-100">
        <Header
        home = { false }
        />
        <div className="mt-h w-100">
          <div className="columns m-0 w-100 mt-h">
            <div className="column is-one-fifth is-hidden-touch p-0">
              <Scrollspy items={ [ 'Recientes', 'IosAndroid', 'VentaOnline', 'PaginaInformativa', 'DisenoGrafico', 'Logos', 'TarjetasPresentacion', 'VideoCreativo', 'PuntosVenta', 'AsistenciaNegocios', 'SiempreInnovando'] } currentClassName="is-active" onUpdate={this.setActiveOption}>
              <aside className="menu is-fixed column is-one-fifth p-4 portfolio-bar" style={{ top: "70px", bottom: "0", left: "0", right: "auto", overflow: "hidden" }}>

                <p className="menu-label">
                  Soluciones
                </p>
                <ul className="menu-list">
                  <li><a href="#Recientes" className={ this.state.selected === "#Recientes" ? 'is-active': '' }>Más Recientes</a></li>
                </ul>
                <p className="menu-label">
                  Aplicaciones Móviles
                </p>
                <ul className="menu-list">
                  <li><a href="#IosAndroid" className={ this.state.selected === "#IosAndroid" ? 'is-active': '' }>IOS Y Android</a></li>
                </ul>
                <p className="menu-label">
                  Sitios Web
                </p>
                <ul className="menu-list">
                  <li><a href="#VentaOnline" className={ this.state.selected === "#VentaOnline" ? 'is-active': '' }>Venta Online</a></li>
                  <li><a href="#PaginaInformativa" className={ this.state.selected === "#PaginaInformativa" ? 'is-active': '' }>Página Informativa</a>
                  </li>
                </ul>
                <p className="menu-label">
                  Diseños
                </p>
                <ul className="menu-list">
                  <li><a href="#DisenoGrafico" className={ this.state.selected === "#DisenoGrafico" ? 'is-active': '' }>Diseño Gráfico</a></li>
                    <ul>
                      <li><a href="#Logos" className={ this.state.selected === "#Logos" ? 'is-active': '' }>Logos</a></li>
                      <li><a href="#TarjetasPresentacion" className={ this.state.selected === "#TarjetasPresentacion" ? 'is-active': '' }>Tarjetas De Presentación</a></li>
                    </ul>
                  <li><a href="#VideoCreativo" className={ this.state.selected === "#VideoCreativo" ? 'is-active': '' }>Video Creativo</a></li>
                </ul>
                <p className="menu-label">
                  Desarrollo De Software
                </p>
                <ul className="menu-list">
                  <li><a href="#PuntosVenta" className={ this.state.selected === "#PuntosVenta" ? 'is-active': '' }>Puntos De Venta</a></li>
                </ul>
                <p className="menu-label">
                  Asesoramiento Técnico
                </p>
                <ul className="menu-list">
                  <li><a href="#AsistenciaNegocios" className={ this.state.selected === "#AsistenciaNegocios" ? 'is-active': '' }>Asistencia A Negocios</a></li>
                </ul>
                <p className="menu-label">
                  Innovación
                </p>
                <ul className="menu-list">
                  <li><a href="#SiempreInnovando" className={ this.state.selected === "#SiempreInnovando" ? 'is-active': '' }>Siempre Innovando</a></li>
                </ul>
              </aside>
              </Scrollspy>
            </div>

            <div className="column is-four-fifth-desktop is-12-touch is-relative p-0">
              <PortfolioSection
              id = "Recientes"
              title = "Más Recientes"
              subtitle = "Aquí se encuentran los proyectos que hemos trabajado recientemente."
              >

              <div className="section pt-0">
                <a href="#PuntosVenta">Punto de venta para Genesys Moda Infantil</a>
              </div>

              <div className="section pt-0">
                <a href="#VentaOnline">Sitio De Compras Online Genesysmi.com</a>
              </div>

              <div className="section pt-0">
                <a href="#DisenoGrafico">El diseño de nuestra empresa codigma.com.mx</a>
              </div>


              </PortfolioSection>

              <PortfolioSection
              id = "IosAndroid"
              title = "IOS Y Android"
              subtitle = "Creamos aplicaciones para teléfonos móviles con los sistemas operativos más populares del momento."
              >
              <div className="columns is-multiline m-0 is-centered has-text-centered is-flex is-centered">
                <div className="column is-2">
                  <div className="flexWrap mx-auto" style={{ width: "60px" }}>
                    <i className="fab fa-3x fa-apple" style={{ color: "#666" }}></i>
                     <b>IOS</b> (Apple)
                  </div>
                </div>
                <div className="column is-2">
                  <div className="flexWrap mx-auto" style={{ width: "70px" }}>
                    <i className="fab fa-3x fa-android" style={{ color: "#a4ca39" }}></i>
                     <b>Android</b> (Google)
                  </div>
                </div>
                </div>
                <div className="section">
                  <h1 className="subtitle is-6">Una aplicación móvil es:</h1>
                  <p className="subtitle is-6 has-text-justified">
                    Un programa informático que se ejecuta en teléfonos inteligentes, tabletas y otros. Las aplicaciones permiten al usuario realizar tareas de cualquier tipo ya sea para uso profesional, de ocio, educativas, de acceso a servicios, etc.
                  </p>
                </div>

              </PortfolioSection>

              <PortfolioSection
              id = "VentaOnline"
              title = "Venta Online"
              subtitle = "Creamos sitios para que hagas crecer tu negocio, llevando a la nube todos tus productos."
              >
              <div className="px-4 ">
                <a href="http://www.genesysmi.com" target="_blank" rel="noopener noreferrer">
                  <img src={ image1 } alt="genesys" className="w-100" style={{ maxWidth: "800px" }}/>
                </a>
              </div>

              <div className="section">

                <h1 className="subtitle is-5">GENESYS YA ESTÁ ONLINE.</h1>
                <p className="subtitle is-6 has-text-justified">
                  Genesys Moda Infantil se encuentra expandiéndose gracias a que tuvieron la visión de crecer con ayuda de las nuevas tendencias tecnológicas como son el mercado online. Nosotros ayudamos a que esto fuera una realidad.<br/>
                  Sé como Genesys y contactanos.<br/>
                  <a href="http://www.genesysmi.com" target="_blank" rel="noopener noreferrer">Visita genesysmi.com</a>
                </p>
              </div>

              </PortfolioSection>

              <PortfolioSection
              id = "PaginaInformativa"
              title = "Página Informativa"
              subtitle = "Una página web te ayudará a que más gente te conozca, y nosotros la creamos para ti."
              >

              <div className="section pt-0">
                <p>
                  Una página Web es un documento o información electrónica adaptada para la World Wide Web (WWW).
                </p>
                <p>
                  El sitio que estás visitando es un ejemplo de una página web, así como nosotros estamos dándonos a conocer gracias a este, tu también puedes lograrlo.
                </p>
              </div>
              <div className="section pt-0">
                <img src={ image2 } alt="codigma" className="w-100" style={{ maxWidth: "800px" }}/>
              </div>
              <div className="section">
                <p>
                  <b>Las ventajas de una página web son:</b>
                </p>
                <ul style={{ listStyleType: "circle", marginLeft: "1.5rem" }}>
                  <li>Llegar a nuevos mercados con audiencia global</li>
                  <li>Su propia identidad en Internet</li>
                  <li>Promover sus servicios</li>
                  <li>Publicidad a las 24 Horas del día</li>
                </ul>
              </div>

              </PortfolioSection>

              <PortfolioSection
              id = "DisenoGrafico"
              title = "Diseño Gráfico"
              subtitle = "Si necesitas diseños de cualquier tipo para tu negocio, nosotros los hacemos."
              >
              <div className="section pt-0">
                <img src={ image3 } alt="diseño" className="w-100" style={{ maxWidth: "800px" }}/>
              </div>

              <div className="section pt-0">
                <h1 className="subtitle is-5">Folletos y Trípticos Creativos.</h1>
                <img src={ image4 } alt="tríptico" className="w-100" style={{ maxWidth: "800px" }}/>
              </div>

              <div className="section pt-0">
                <h1 className="subtitle is-5">Flyers. Es una forma sencilla de dar publicidad a tu compañía, producto o servicio.</h1>
                <img src={ image11 } alt="volante1" className="w-100" style={{ maxWidth: "550px" }}/>
                <img src={ image12 } alt="volante2" className="w-100" style={{ maxWidth: "550px" }}/>
              </div>
              </PortfolioSection>

              <PortfolioSection
              id = "Logos"
              title = "Logotipos"
              subtitle = "Un negocio necesita de una imagen para que las personas lo identifiquen, es por eso que nosotros creamos logos para ti."
              >
              <div className="columns m-0 is-multiline is-centered">
                <div className="column is-narrow p-3 has-text-centered">
                  <img src={ image5 } alt="logo1" className="w-100" style={{ maxWidth: "220px" }}/>
                </div>
                <div className="column is-narrow p-3">
                  <img src={ image9 } alt="logo2" className="w-100" style={{ maxWidth: "400px" }}/>
                </div>
                <div className="column is-narrow p-3">
                  <img src={ image6 } alt="logo" className="w-100" style={{ maxWidth: "400px" }}/>
                </div>
              </div>
              </PortfolioSection>

              <PortfolioSection
              id = "TarjetasPresentacion"
              title = "Tarjetas De Presentación"
              subtitle = "Son una representación de los datos más importantes de una persona o negocio, es por eso que necesitas organizar esa información en tarjetas, por lo que nosotros te ayudamos a tenerlas."
              >
              <div className="section pt-0">
                <img src={ image10 } alt="tarjeta" className="w-100" style={{ maxWidth: "400px" }}/>
              </div>
              </PortfolioSection>

              <PortfolioSection
              id = "VideoCreativo"
              title = "Video Creativo"
              subtitle = "El uso del vídeo es vital para las marcas. Un video te ayudará a expresar mejor lo que haces, y codigma te ayuda a lograrlo de una manera creativa."
              >
              <div className="section pt-0 has-text-centered has-text-warning">
                <i className="fas fa-3x fa-play"></i>
              </div>

              </PortfolioSection>

              <PortfolioSection
              id = "PuntosVenta"
              title = "Puntos De Venta"
              subtitle = "Son el punto de control para tu negocio. Te organiza tus ventas, productos y mejora los tiempos para la atención a tus clientes. No pierdas más el tiempo. Contáctanos para crear el tuyo, lo adaptamos a tus necesidades."
              >

              <div className="section pt-0">
                <img src={ image8 } alt="punto" className="w-100" style={{ maxWidth: "700px" }}/>
              </div>

              </PortfolioSection>

              <PortfolioSection
              id = "AsistenciaNegocios"
              title = "Asistencia A Negocios"
              subtitle = "Brindamos el servicio de asesoría, para orientar a los negocios en el desarrollo de sus procesos y así puedan brindar un servicio de calidad."
              >

              <div className="section pt-0 has-text-centered">
                <i className="fas fa-3x fa-hands-helping has-text-warning"></i>
              </div>

              </PortfolioSection>

              <PortfolioSection
              id = "SiempreInnovando"
              title = "Siempre Innovando"
              subtitle = "Como empresa de tecnología debemos mantenernos actualizados, ya que la tecnología va en constante cambio. En codigma nos preocupamos por mantenernos al día en el ámbito tecnológico."
              >

              <div className="section pt-0 has-text-centered">
                <i className="far fa-3x fa-lightbulb has-text-warning"></i>
              </div>

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
