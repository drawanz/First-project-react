import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return <div className="div-container-headline"><h2>{headline}</h2></div>;
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: 'TextDefault',
};

export default Title;
