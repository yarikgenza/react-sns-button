import PropTypes from 'prop-types';
import React from 'react';
import Label from './Label';
import ReactSNSButtonStyled from './ReactSNSButtonStyled';

const propTypes = {
  label: PropTypes.string.isRequired,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {};

const ReactSNSButton = ({ label, renderIcon, ...props }) => (
  <ReactSNSButtonStyled {...props} >
    {React.cloneElement(renderIcon(), { color: '#FFF', size: 30, style: { padding: 5 } })}
    <Label>
      {label}
    </Label>
  </ReactSNSButtonStyled>
);

ReactSNSButton.propTypes = propTypes;
ReactSNSButton.defaultProps = defaultProps;

export default ReactSNSButton;
