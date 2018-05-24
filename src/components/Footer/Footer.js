import React from 'react';


const Footer = () => {
  return(
    <div className="w-100">
      <div className="columns is-mobile is-multiline is-centered maxWidth-100 section m-0">

        <div className="column is-four-fifths-mobile is-one-third-tablet is-one-quarter-desktop">
          <p className="has-text-centered">
            <b>Corporativo</b>
            <br />
            Lázaro Cárdenas Michoacán México
            <br />
            <span>+52(753)1215568</span>
            <br/>
            <span>codigma.mx@gmail.com</span>
          </p>
        </div>

        <div className="column is-four-fifths-mobile is-one-third-tablet is-one-quarter-desktop">
          <p className="has-text-centered">
            <b>Nuestras redes sociales</b>
            <br/>
            <a className="mr-3" href="https://www.facebook.com/Codigma/" target="_blank" rel="noopener noreferrer">
              <span className="icon has-text-white">
                <i className="fab fa-lg fa-facebook-f"></i>
              </span>
            </a>
            <a className="mr-3" href="https://twitter.com/Codigma_" target="_blank" rel="noopener noreferrer">
              <span className="icon has-text-white">
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
            <a href="https://www.instagram.com/codigma_/" target="_blank" rel="noopener noreferrer">
              <span className="icon has-text-white">
                <i className="fab fa-lg fa-instagram"></i>
              </span>
            </a>
          </p>
        </div>

        <div className="column is-four-fifths-mobile is-one-third-tablet is-one-quarter-desktop">
          <div className="has-text-centered mx-auto" style={{ width: "160px" }}>
            <b className="is-italic">"Confía en tus ideas"</b>
            <br/>
            <span>Nosotros las hacemos realidad.</span>
          </div>
        </div>
      </div>
      <div className="has-text-centered has-background-white p-2 w-100">
        <p>
          <span><strong>©2018 Codigma.</strong> Diseño gráfico, desarrollo web y móvil.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
