import React, { Component } from 'react';
import logo from '../../img/logo-y.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);

    const {
      toggle,
      menu
    } = this.props

    this.state = {
      isToggleOn : toggle,
      isMenuSection : menu
    };

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleSetToggle = (e) => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleSetMenu = (e, id) => {
    this.setState({
      isMenuSection: id
    })
  }

  render(){
    return(
    <nav id="navbar" className="navbar header is-dark is-shadow is-fixed-top" style={{ height: "70px" }}>
      <div className="container h-100">

        <div className="navbar-brand h-100">
          <Link to="/" className="navbar-item" onClick={ (e) => this.handleSetMenu(e, 1) }>
            <img src={ logo } alt="codigma" className="maxHeight-100" style={{ height: "23px" }} />
          </Link>

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

          <div id="navbarBurger" className="is-flex navbar-burger is-centered is-vcentered is-hidden-desktop h-100" onClick={ this.handleSetToggle } data-target="navMenuDocumentation" style={{ width: "70px" }}>
            <i className={ this.state.isToggleOn ? 'fas fa-times' : 'fas fa-bars' }></i>
          </div>
        </div>


        <div id="navMenuDocumentation" className={ "navbar-menu " + (this.state.isToggleOn ? 'is-active' : '') }>
          <div className="navbar-start">

            <Link to="/" className={ "navbar-item " + (( this.state.isMenuSection === 1) ? 'is-active' : '') } onClick={ (e) => this.handleSetMenu(e, 1) }>
              <span className="icon has-text-danger mr-1">
                <i className="fas fa-home"></i>
              </span>
              <span>Inicio</span>
            </Link>
            <Link to="/nosotros" className={ "navbar-item " + (( this.state.isMenuSection === 2) ? 'is-active' : '') } onClick={ (e) => this.handleSetMenu(e, 2) }>
              <span className="icon mr-1 has-text-info">
                <i className="fas fa-users"></i>
              </span>
              <span>Nosotros</span>
            </Link>

            <Link to="/servicios" className={ "navbar-item " + (( this.state.isMenuSection === 3) ? 'is-active' : '') } onClick={ (e) => this.handleSetMenu(e, 3) }>
              <span className="icon has-text-primary mr-1">
                <i className="fas fa-cogs"></i>
              </span>
              <span>Servicios</span>
            </Link>

            <Link to="/portafolio" className={ "navbar-item " + (( this.state.isMenuSection === 4) ? 'is-active' : '') } onClick={ (e) => this.handleSetMenu(e, 4) }>
              <span className="icon has-text-success mr-1">
                <i className="fas fa-briefcase"></i>
              </span>
              <span>Portafolio</span>
            </Link>
          </div>

  <div className="navbar-end">
    <a className="navbar-item is-hidden-touch" href="https://twitter.com/Codigma_" target="_blank" rel="noopener noreferrer">
      <span className="icon has-text-info">
        <i className="fab fa-lg fa-twitter"></i>
      </span>
    </a>
    <a className="navbar-item is-hidden-touch" href="https://www.facebook.com/Codigma/" target="_blank" rel="noopener noreferrer">
      <span className="icon has-text-white">
        <i className="fab fa-lg fa-facebook-f"></i>
      </span>
    </a>
    <div className="navbar-item field is-grouped is-flex is-vcentered">
      <span className="icon has-text-success mr-1">
        <i className="fab fa-lg fa-whatsapp"></i>
      </span>
      <span className={ (this.state.isToggleOn ? 'has-text-black' : 'has-text-weight-semibold has-text-white') }>+52 (753)1215568</span>
    </div>
  </div>
</div>
</div>
</nav>
    );
  }
}

Header.defaultProps = {
  toggle: false,
  menu: 1
}

export default Header;
