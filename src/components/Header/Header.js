import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Header extends Component {
  constructor(props){
    super(props);

    const {
      toggle
    } = this.props

    this.state = {
      isToggleOn : toggle,
      transparent: this.props.home,
      isHome: this.props.home
    };

    this.headerColorChange = this.headerColorChange.bind(this);
  }

  componentDidMount() {
    if(this.state.isHome){
      window.addEventListener("scroll", this.headerColorChange);
    }
  }

  headerColorChange() {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 340) {
      this.setState({
        transparent: false
      });
    } else {
      this.setState({
        transparent: true
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.headerColorChange);
  }

  handleSetToggle = (e) => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleSetMenu = (e) => {
    this.setState({
      isToggleOn: false
    })
  }

  render(){
    return(
    <nav id="navbar" className={ "navbar header is-fixed-top is-dark " + (this.state.transparent ? 'is-transparent' : 'is-dark is-shadow') } style={{ height: "70px" }}>

    <button type="button" name="buttonTop" id="btnToTop" className={ "button is-warning is-fixed "+ (this.state.transparent ? 'd-none' : 'd-flex') } onClick={ () => window.scrollTo(0, 0) }>
      <i className="fas fa-2x fa-angle-up is-absolute"></i>
    </button>

      <div className="container h-100">

        <div className="navbar-brand h-100">
          <NavLink to="/"
          className="navbar-item"
          onClick={ (e) => this.handleSetMenu(e) }>
          <svg className={ "icon "+ (this.state.transparent ? '' : 'has-text-warning') } style={{ width: "100px", fill: "currentColor" }}>
            <use xlinkHref="#logo" />
          </svg>

          </NavLink>

          <a className="navbar-item is-hidden-desktop has-text-info" href="https://twitter.com/Codigma_" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-lg fa-twitter"></i>
            </span>
          </a>

          <a className="navbar-item is-hidden-desktop" href="https://www.facebook.com/Codigma/" target="_blank" rel="noopener noreferrer">
            <span className="icon has-text-white">
              <i className="fab fa-lg fa-facebook-f"></i>
            </span>
          </a>

          <div id="navbarBurger" className="is-flex navbar-burger is-centered is-vcentered is-hidden-desktop h-100"
          onClick={ this.handleSetToggle } data-target="navMenuDocumentation" style={{ width: "70px" }}>
            <i className={ this.state.isToggleOn ? 'fas fa-times' : 'fas fa-bars' }></i>
          </div>
        </div>


        <div id="navMenuDocumentation" className={ "navbar-menu " + (this.state.isToggleOn ? 'is-active' : '') }>
          <div className="navbar-start">

            <NavLink to="/"
            exact
            activeClassName="is-active"
            className="navbar-item"
            onClick={ (e) => this.handleSetMenu(e) }>
              <span className="icon has-text-danger mr-1">
                <i className="fas fa-home"></i>
              </span>
              <span>Inicio</span>
            </NavLink>

            <NavLink
            to="/nosotros"
            activeClassName="is-active"
            className="navbar-item"
            onClick={ (e) => this.handleSetMenu(e) }>
              <span className="icon mr-1 has-text-info">
                <i className="fas fa-users"></i>
              </span>
              <span>Nosotros</span>
            </NavLink>

            <NavLink to="/servicios"
            activeClassName="is-active"
            className="navbar-item"
            onClick={ (e) => this.handleSetMenu(e) }>
              <span className="icon has-text-primary mr-1">
                <i className="fas fa-cogs"></i>
              </span>
              <span>Servicios</span>
            </NavLink>

            <NavLink to="/portafolio/#Recientes"
            activeClassName="is-active"
            className="navbar-item"
            onClick={ (e) => this.handleSetMenu(e) }>
              <span className="icon has-text-success mr-1">
                <i className="fas fa-briefcase"></i>
              </span>
              <span>Portafolio</span>
            </NavLink>
          </div>

  <div className="navbar-end">
    <a className="navbar-item is-hidden-touch" href="https://twitter.com/Codigma_" target="_blank" rel="noopener noreferrer">
      <span className="icon has-text-info">
        <i className="fab fa-lg fa-twitter"></i>
      </span>
    </a>
    <a className="navbar-item is-hidden-touch" href="https://www.facebook.com/Codigma/" target="_blank" rel="noopener noreferrer">
      <span className="icon">
        <i className="fab fa-lg fa-facebook-f"></i>
      </span>
    </a>
    <div className="navbar-item field is-grouped is-flex is-vcentered">
      <span className="icon has-text-success mr-1">
        <i className="fab fa-lg fa-whatsapp"></i>
      </span>
      <span className="has-text-weight-semibold is-hidden-touch">+52 (753)1215568</span>
      <span className="is-hidden-desktop">+52 (753)1215568</span>
    </div>
  </div>
</div>
</div>
</nav>
    );
  }
}

Header.defaultProps = {
  toggle: false
}

export default Header;
