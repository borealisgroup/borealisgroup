import React from 'react';

export const showComponent = (component, condition) => {
  if (condition) return component;
  return null;
};

export const ChangeColor = ({ color }) => {
  if (color) {
    return <style>{`.change_color * {fill:${color} !important}`}</style>;
  }
  return null;
};
