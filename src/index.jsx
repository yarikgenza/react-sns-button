import PropTypes from 'prop-types';
import React from 'react';
import Label from './Label';

const propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  renderIcon: PropTypes.func.isRequired,
};

const defaultProps = {
  style: undefined,
};

const ReactSNSButton = ({ label, style, renderIcon, ...props }) => (
  <div
    style={Object.assign({}, style, {
      alignItems: 'center',
      borderRadius: 4,
      display: 'flex',
      height: 'fit-content',
      cursor: 'pointer',
      width: 'fit-content',
    })}
    {...props}
  >
    {React.cloneElement(renderIcon(), {
      color: '#FFF',
      size: 30,
      style: { padding: 5 },
      ...props,
    })}
    <Label>
      {label}
    </Label>
  </div>
);

ReactSNSButton.propTypes = propTypes;
ReactSNSButton.defaultProps = defaultProps;

export default ReactSNSButton;
