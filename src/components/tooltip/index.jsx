import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Tooltip({ imageSrc, children }) {
  return (
    <div className="tooltip-container">
      <div className="tooltip-image" style={{ backgroundImage: `url(${imageSrc})` }}></div>
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Tooltip;
