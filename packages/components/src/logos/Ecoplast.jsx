import React from 'react';
import PropTypes from 'prop-types';
import { ChangeColor } from './utils';

const Ecoplast = ({ color, ...props }) => (
  <svg className="change_color" viewBox="0 0 676 137" {...props}>
    <title>Ecoplast Logo</title>
    <ChangeColor color={color} />
    <text
      transform="translate(139.547 108.512)"
      fontSize={144.029}
      fontFamily="ArialMT"
    >
      {'ecoplast'}
    </text>
    <path fill="#d52b1e" d="M0 0h69L0 133z" />
    <path fill="#00af3f" d="M82 0v133H13" />
  </svg>
);

Ecoplast.defaultProps = {
  color: null,
};

Ecoplast.propTypes = {
  color: PropTypes.string,
};

export default Ecoplast;
