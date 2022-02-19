import React, { Component } from 'react';
import Github from '../images/Github.png';
import linkedinIcon from '../images/linkedinIcon.png';

class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <footer>
          <p>Contate-me!</p>
          <a href="https://github.com/drawanz" target="_blank" rel="noreferrer">
            <img src={ Github } alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/le%C3%B4nidas-drawanz-ferreira-494a04202/" target="_blank" rel="noreferrer">
            <img src={ linkedinIcon } alt="linkedin" />
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
