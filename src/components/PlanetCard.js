import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {

}

PlanetCard.propTypes = {
    planetName: PropTypes.string.isRequired,
    planetImage: PropTypes.string.isRequired,
};

PlanetCard.defaultProps = {
    planetName
}

Title.propTypes = {
    headline: PropTypes.string.isRequired,
  };
  
  Title.defaultProps = {
    headline: 'TextDefault',
  };

export default PlanetCard;