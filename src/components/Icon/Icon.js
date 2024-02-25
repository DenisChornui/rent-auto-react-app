import React from 'react';
import sprite from './icon-spraite.svg';

export const Icon = ({ name, ...otherProps }) => {
  return (
    <svg {...otherProps}>
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
};
