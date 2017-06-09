import PropTypes from 'prop-types';
import React from 'react';
import Label from './Label';
import ReactSNSButtonStyled from './ReactSNSButtonStyled';

const propTypes = {
  label: PropTypes.string.isRequired,
  styleBackgroundColor: PropTypes.string,
  styleColor: PropTypes.string,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  styleBackgroundColor: 'transparent',
  styleColor: '#FFFFFF',
};

const ReactSNSButton = ({ styleBackgroundColor, styleColor, label, renderIcon, ...props }) => (
  <ReactSNSButtonStyled styleBackgroundColor={styleBackgroundColor} {...props} >
    {React.cloneElement(renderIcon(), { color: styleColor, size: 30, style: { padding: 5 } })}
    <Label styleColor={styleColor} >
      {label}
    </Label>
  </ReactSNSButtonStyled>
);

ReactSNSButton.propTypes = propTypes;
ReactSNSButton.defaultProps = defaultProps;

export default ReactSNSButton;
