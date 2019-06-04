/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { showComponent, ChangeColor } from './utils';

const taglinePath = (
  <path
    d="M11.7 181h2.8l-5.9 13.4v8.2H5.8v-8.2L0 181h3.1l4.2 10.5 4.4-10.5zM16.6 195.3c0-4.4.5-8.1 5.8-8.1s5.8 3.7 5.8 8.1c0 6.7-2.6 7.6-5.8 7.6s-5.8-.9-5.8-7.6zm8.9-1c0-4.1-1.3-5-3.2-5s-3.2.9-3.2 5c0 4.9.6 6.7 3.2 6.7s3.2-1.8 3.2-6.7zM42.2 187.5h2.5v12c0 1 .1 2.1.1 3.1h-2.6v-1.8h-.1c-.8 1.4-2.3 2.2-3.8 2.1-2.6 0-4.1-1.3-4.1-3.9v-11.6h2.5V198c0 1.8.8 3.1 2.6 3.1 1.3 0 3-1 3-3.5l-.1-10.1zM53.8 189.8c1.1-2.3 2.3-2.6 4.7-2.6v2.6l-.7-.1c-.2 0-.4-.1-.7-.1-2.7 0-3.4 2.1-3.4 4.1v8.9h-2.4v-15.2h2.5v2.4zM82.1 187c.1-1.1-.1-2.2-.6-3.1-.7-.6-1.5-.9-2.4-.9-1.3-.1-2.6.5-3.3 1.7-.1.2-.6.8-.6 4.5v5.8c0 5.3 1.7 5.9 3.9 5.9.8 0 3.4-.3 3.4-4.5h2.9c.1 6.8-4.7 6.8-6.1 6.8-2.7 0-6.8-.2-6.8-8.6v-6.1c0-6.1 2.7-7.9 7-7.9s5.9 2.2 5.7 6.4h-3.1zM93.7 189.8c1.1-2.3 2.3-2.6 4.7-2.6v2.6l-.7-.1c-.2 0-.4-.1-.7-.1-2.7 0-3.4 2.1-3.4 4.1v8.9h-2.5v-15.2h2.5l.1 2.4zM102.8 195.3c0-4.4.5-8.1 5.8-8.1s5.8 3.7 5.8 8.1c0 6.7-2.6 7.6-5.8 7.6s-5.8-.9-5.8-7.6zm9-1c0-4.1-1.3-5-3.2-5s-3.2.9-3.2 5c0 4.9.6 6.7 3.2 6.7s3.2-1.8 3.2-6.7zM123.1 189.3c.7-1.3 2.1-2.1 3.5-2.1 2.4 0 4.9 1 4.9 7.6 0 3.8-.1 8.1-5 8.1-1.4 0-2.6-.7-3.3-1.8h-.1v7.3h-2.5v-20.9h2.5v1.8zm5.8 5.5c0-2.3 0-5.6-3.1-5.6s-2.8 4.2-2.8 6.5c0 2 .1 5.2 2.9 5.2s3-2 3-6.1zM161.7 181v21.7h-3.8l-8.6-18.8h-.1v18.8h-2.5V181h3.9l8.4 18.5h.1V181h2.6zM176.7 187.5h2.5v12c0 1 .1 2.1.1 3.1h-2.6v-1.8h-.1c-.8 1.4-2.3 2.2-3.8 2.1-2.6 0-4.1-1.3-4.1-3.9v-11.6h2.5V198c0 1.8.8 3.1 2.6 3.1 1.3 0 3-1 3-3.5l-.1-10.1zM186 187.5v-2.9l2.5-1.1v4h3.3v1.9h-3.3v9.3c0 1 0 2.2 2.2 2.2.2 0 .6-.1 1.1-.1v1.9c-.8.1-1.6.2-2.4.2-2.3 0-3.4-1-3.4-2.7v-10.8h-2.5v-1.9h2.5zM198.8 189.8c1.1-2.3 2.3-2.6 4.7-2.6v2.6l-.7-.1c-.2 0-.4-.1-.7-.1-2.7 0-3.4 2.1-3.4 4.1v8.9h-2.5v-15.2h2.5l.1 2.4zM208.2 181h2.8v2.6h-2.8V181zm2.6 21.7h-2.5v-15.2h2.5v15.2zM217.4 187.5v-2.9l2.5-1.1v4h3.3v1.9h-3.3v9.3c0 1 0 2.2 2.2 2.2.2 0 .6-.1 1.1-.1v1.9c-.8.1-1.6.2-2.4.2-2.3 0-3.4-1-3.4-2.7v-10.8h-2.5v-1.9h2.5zM227.5 181h2.8v2.6h-2.8V181zm2.6 21.7h-2.5v-15.2h2.5v15.2zM236.1 195.3c0-4.4.5-8.1 5.8-8.1s5.8 3.7 5.8 8.1c0 6.7-2.5 7.6-5.8 7.6s-5.8-.9-5.8-7.6zm8.9-1c0-4.1-1.3-5-3.2-5s-3.2.9-3.2 5c0 4.9.6 6.7 3.2 6.7s3.2-1.8 3.2-6.7zM261.9 202.6v-10.5c0-1.6-.6-2.9-2.7-2.9-2.7 0-3.1 2.4-3.1 4.5v9h-2.5v-12c0-1-.1-2.1-.1-3.1h2.6v1.9h.1c.7-1.5 2.4-2.4 4-2.2 3.2 0 4 1.9 4 4.9v10.5l-2.3-.1zM284.8 181h3.5l7.1 21.6h-3.1l-1.6-5.2h-8.4l-1.6 5.2H278l6.8-21.6zm1.7 2.5l-3.5 11.6h6.9l-3.4-11.6zM308.2 181h2.5v21.7h-2.5v-1.8h-.1c-.6 1.3-2 2.1-3.5 2.1-2.4 0-4.9-1-4.9-7.6 0-3.8.1-8.1 5-8.1 1.4 0 2.6.7 3.3 1.8h.1l.1-8.1zm-2.9 8.2c-2.6 0-3 2.1-3 6.1 0 2.3 0 5.6 3.1 5.6 2.8 0 2.8-3.4 2.8-6.5 0-2-.2-5.2-2.9-5.2zM315.6 187.5h2.8l3.4 12.8h.1l3.6-12.8h2.6l-4.7 15.1h-3.2l-4.6-15.1zM332.6 181h2.8v2.6h-2.8V181zm2.6 21.7h-2.5v-15.2h2.5v15.2zM346.1 202.9c-3.3 0-5.3-1.4-5.2-4.9h2.8c0 .9 0 2.9 2.5 2.9 1.5 0 2.6-.8 2.6-2.3 0-2.7-7.6-2.8-7.6-7.3 0-1.6 1-4.1 5.2-4.1 2.7 0 5 1.3 4.8 4.3h-2.7c.2-1.2-.6-2.2-1.8-2.4h-.6c-1.1-.1-2.2.6-2.3 1.8v.2c0 2.7 7.6 2.6 7.6 7.2 0 3.3-2.3 4.6-5.3 4.6zM356.7 195.3c0-4.4.5-8.1 5.8-8.1s5.8 3.7 5.8 8.1c0 6.7-2.5 7.6-5.8 7.6s-5.8-.9-5.8-7.6zm8.9-1c0-4.1-1.3-5-3.2-5s-3.2.9-3.2 5c0 4.9.6 6.7 3.2 6.7s3.2-1.8 3.2-6.7zM376.8 189.8c1.1-2.3 2.3-2.6 4.7-2.6v2.6l-.7-.1c-.2 0-.4-.1-.7-.1-2.7 0-3.4 2.1-3.4 4.1v8.9h-2.5v-15.2h2.5l.1 2.4z"
    fill="#849daa"
  />
);

const getViewBox = tagline => {
  const defaultViewBox = '0 0 405.2 208.4';
  if (!tagline) return '0 0 405.2 170';
  return defaultViewBox;
};

const NutriGuide = ({ tagline, color, ...props }) => (
  <svg className="change_color" viewBox={getViewBox(tagline)} {...props}>
    <title>Nutriguide Logo</title>
    <ChangeColor color={color} />
    {showComponent(taglinePath, tagline)}
    <path
      d="M34.6 85c.3-.2 1.3-.4 2.9-.4 1.6 0 3.7-.1 6.4-.1v82.1c0 1.3-.7 1.9-2 1.9h-7.2l-13.8-33c-1.9-5.1-5.7-16.5-11.4-34.2.3 3.4.6 9.2.8 17.3.2 8.1.4 14.4.4 18.8v29.2c0 .7-.1 1.2-.4 1.4-.3.2-1.2.4-2.8.4-1.6 0-3.7.1-6.4.1V86.4c0-1.3.6-1.9 1.9-1.9h7.3l13.6 32.4c1 2.8 4 11.6 8.9 26.3.3 1 1.2 3.6 2.6 7.8v-.4c-.4-3.1-.7-8.8-.9-17-.2-8.2-.3-14.5-.3-18.9V86.4c0-.7.1-1.2.4-1.4zm26.8 82.5c-2.6-1.4-4.4-3.6-5.4-6.4-1-2.8-1.6-6.6-1.6-11.3v-39.4c0-.7.1-1.2.4-1.4.3-.2 1.2-.4 2.9-.4s3.9-.1 6.7-.1v42.1c0 4.1.5 6.9 1.6 8.4s3.3 2.3 6.5 2.3 5.9-.8 8-2.3v-48.6c0-.7.2-1.2.5-1.4.3-.2 1.3-.4 2.8-.4 1.6 0 3.7-.1 6.4-.1v56.9c-2.4 1.3-5.2 2.3-8.4 3.1-3.2.8-6.4 1.2-9.6 1.2-4.6 0-8.2-.7-10.8-2.2zm48.8.1c-1.6-1.4-2.7-3.4-3.2-5.9-.5-2.5-.8-5.8-.8-9.9v-35H98c0-2.2 0-3.9.1-5.2.1-1.3.3-2.2.5-2.5.3-.4.7-.5 1.4-.5h6.1V90.3c0-1.1.3-1.9.8-2.3.5-.4 1.4-.7 2.5-.8s3.3-.2 6.3-.2v21.6h12.5c0 2.2 0 3.9-.1 5.3s-.3 2.2-.5 2.5c-.3.3-.7.5-1.4.5h-10.4v35c0 3.3.3 5.7.8 7.3.5 1.6 1.7 2.3 3.7 2.3 1.3 0 2.4-.1 3.4-.4 1-.3 2.2-.7 3.6-1.4.5 1.6.7 3.2.7 4.8 0 1.9-1 3.3-3 4.1-2 .8-4.4 1.2-7.3 1.2-3.4-.1-5.9-.8-7.5-2.2zm25.9-54.9c5.1-3.6 10.6-5.4 16.3-5.4 3 0 5.1.4 6.4 1.3 1.3.8 2 2.1 2 3.8 0 2-.4 3.9-1.1 5.6-1.7-1-3.6-1.4-5.8-1.4-3.1 0-5.8.9-7.9 2.8l-.1 47.3c0 .7-.2 1.2-.5 1.4-.3.2-1.3.4-2.9.4-1.6 0-3.8.1-6.5.1v-55.9h.1zm31.8.2c0-1.5.3-2.6.8-3.2.5-.6 1.4-1 2.6-1.1 1.2-.1 3.3-.2 6.4-.2v58.1c0 .7-.1 1.2-.4 1.4-.3.2-1.2.4-2.8.4-1.6 0-3.8.1-6.5.1v-55.5h-.1zm-.3-19.8c0-5.1 1.8-7.7 5.5-7.7 1.8 0 3 .5 3.7 1.6.7 1 1.1 2.8 1.1 5.4 0 2.4-.5 4.3-1.4 5.6-1 1.4-2.3 2-4.1 2-3.2.1-4.8-2.2-4.8-6.9zm28.7 73.2c-3.2-2.3-5.6-6.4-7.1-12.3s-2.3-14.4-2.3-25.6c0-12.1 1-21.4 3.1-28s4.9-11.1 8.6-13.5 8.4-3.7 14.2-3.7c3.8 0 6.9.6 9.3 1.9 2.4 1.2 3.5 2.7 3.5 4.3 0 1.9-.4 4-1.3 6.2-1.1-.9-2.5-1.6-4.2-2.1-1.7-.5-3.5-.8-5.4-.8-4.2 0-7.6 1.1-10.1 3.2s-4.3 5.7-5.5 10.7c-1.2 5-1.8 12-1.8 21 0 9.2.5 16.1 1.4 20.8 1 4.7 2.3 7.8 4.1 9.4 1.8 1.6 4.1 2.3 7 2.3 1.9 0 3.5-.3 4.7-1 1.2-.6 2.1-1.3 2.5-2v-29.9h-9v-6.1c0-1.3.8-1.9 2.3-1.9H226v45c-4.3 3.6-9.8 5.4-16.4 5.4-5.7.1-10.1-1-13.3-3.3zm45.7 1.2c-2.6-1.4-4.4-3.6-5.4-6.4-1-2.8-1.6-6.6-1.6-11.3v-39.4c0-.7.1-1.2.4-1.4.3-.2 1.2-.4 2.9-.4s3.9-.1 6.7-.1v42.1c0 4.1.5 6.9 1.6 8.4s3.3 2.3 6.5 2.3 5.9-.8 8-2.3v-48.6c0-.7.2-1.2.5-1.4.3-.2 1.3-.4 2.8-.4 1.6 0 3.7-.1 6.4-.1v56.9c-2.4 1.3-5.2 2.3-8.4 3.1-3.2.8-6.4 1.2-9.6 1.2-4.6 0-8.2-.7-10.8-2.2zm39.9-54.6c0-1.5.3-2.6.8-3.2.5-.6 1.4-1 2.6-1.1 1.2-.1 3.3-.2 6.4-.2v58.1c0 .7-.1 1.2-.4 1.4-.3.2-1.2.4-2.8.4-1.6 0-3.8.1-6.5.1v-55.5h-.1zm28.3 54.8c-2.8-1.4-5-4.2-6.7-8.4s-2.5-10.4-2.5-18.6c0-11.3 1.7-19.7 5.1-25.1 3.4-5.5 7.8-8.2 13.3-8.2 3.7 0 6.6.8 8.6 2.4v-25c0-1.5.3-2.6.8-3.2.5-.6 1.4-1 2.6-1.1 1.2-.1 3.3-.2 6.4-.2v85.8c-5.1 2.4-10.9 3.6-17.3 3.6-4.1 0-7.5-.7-10.3-2zm17.8-8.4v-42c-1.4-1-3.2-1.6-5.5-1.6-7.2 0-10.8 8-10.8 23.9 0 5.8.4 10.3 1.1 13.4s1.7 5.2 3 6.4c1.3 1.1 3 1.7 5 1.7 3.1 0 5.5-.6 7.2-1.8zm53.5-2.8c.6 1.8.8 4 .8 6.6 0 1.8-1.6 3.4-4.9 4.7-3.2 1.3-7.1 1.9-11.7 1.9-4.1 0-7.5-.8-10.3-2.3-2.8-1.5-4.9-4.3-6.5-8.4-1.6-4.1-2.4-9.9-2.4-17.4 0-9.4 1-16.6 2.9-21.6 2-5 4.5-8.4 7.5-10.1 3-1.7 6.6-2.6 10.8-2.6 10.2 0 15.2 6.4 15.2 19.2 0 6.4-.4 11.6-1.3 15.6-3.5.7-7.6 1.2-12.3 1.5-4.7.3-9 .4-12.9.4.2 4.3.7 7.6 1.5 10s2 4 3.6 4.9c1.6 1 3.6 1.4 6.2 1.4 5 0 9.5-1.2 13.8-3.8zm-21.7-36.2c-1.8 3-2.8 8.3-3.1 16 7.9 0 13.4-.5 16.4-1.4.4-1.8.6-4.2.6-7.2-.1-4.5-.6-7.6-1.6-9.3-1-1.7-2.8-2.6-5.4-2.6-2.8 0-5.1 1.5-6.9 4.5z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#849daa"
    />
    <path
      d="M280.7 46.3c-11-12.6-26.9-20.9-41.3-21.8-1.2-.2-2 .7-2.1 1.8-2.1 25.4 2.6 46.3 13.3 58.6 6.6 7.6 15.2 11.8 25.6 12.5h.1c1.1 0 2-.8 2-1.9.1-1.1-.8-2.1-1.9-2.1-9.3-.6-17-4.4-22.8-11.1-9.6-11-14.1-30.5-12.5-53.7 12.8 1.4 26.7 9 36.5 20.2 9.3 10.6 13.9 23 12.9 34.8-.1 1.1.7 2.1 1.9 2.2 1.2.1 2.1-.7 2.2-1.8 1.1-12.8-3.9-26.3-13.9-37.7z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#8bc751"
    />
    <path
      d="M259.2 49.7c.2 0 .3 0 .5.1.6.1 2.9.5 3.3.5 1.5.2 2.8.4 4.2.6 1 .1 2-.6 2.1-1.7.1-1.1-.6-2-1.6-2.2-1.3-.2-2.6-.4-4.1-.6-.4-.1-2.7-.4-3.3-.5-2.1-.3-3.3-.4-4.4-.3-1.6.2-2.7.9-3.4 2.2-.9 1.8-.8 3.6 0 10.9.1 1.1 1.1 1.8 2.1 1.7 1-.1 1.8-1.1 1.7-2.2-.3-3-.5-4.9-.6-6.3 10.1 9.7 24.8 26.4 29.6 47 .2.9 1.1 1.6 2 1.6h.4c1.1-.3 1.8-1.3 1.6-2.4-4.9-21-19.7-38.3-30.1-48.4z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#8bc751"
    />
    <path
      d="M319.9 23.4c.1.6.3 2.9.3 3.3.2 1.5.3 2.9.5 4.3.1 1.1 1.1 1.8 2.2 1.7 1.1-.1 1.8-1.1 1.7-2.2-.2-1.4-.3-2.7-.5-4.2 0-.4-.3-2.7-.3-3.3-.2-2.1-.4-3.4-.8-4.4-.6-1.5-1.5-2.5-3-2.8-1.9-.4-3.7.1-10.4 2.8-1 .4-1.5 1.5-1.1 2.5.4 1 1.5 1.5 2.5 1.1 2.8-1.1 4.7-1.8 5.9-2.2-6.4 6.3-16 18-25.1 33.6-.6 1-.2 2.2.7 2.8.3.2.7.3 1 .3.7 0 1.4-.4 1.8-1 9-15.3 18.3-26.7 24.5-32.8 0 .1.1.3.1.5z"
      fill="#109249"
    />
    <path
      d="M333.5 2.3c-.1-1.1-1.1-2-2.1-1.9-19.7 1.2-40.7 16-49.9 35.4-.5 1-.1 2.2 1 2.7 1 .5 2.2.1 2.7-1 8.3-17.5 26.8-31 44.5-32.9 1.1 15.7.8 57.5-29.8 63.9-1.1.2-1.8 1.3-1.6 2.4.2 1 1 1.6 2 1.6h.4c23.7-4.9 36-31.2 32.8-70.2z"
      fill="#109249"
    />
    <g>
      <path
        d="M405.2 93.1c0 7.3-5.7 12.9-13.1 12.9-7.3 0-13.2-5.7-13.2-12.9 0-7.1 5.9-12.8 13.2-12.8 7.4 0 13.1 5.7 13.1 12.8zm-23 0c0 5.7 4.2 10.2 10 10.2 5.6 0 9.8-4.5 9.8-10.1 0-5.7-4.1-10.3-9.8-10.3s-10 4.5-10 10.2zm7.9 6.7h-3V87c1.2-.2 2.8-.4 4.9-.4 2.4 0 3.5.4 4.4.9.7.5 1.2 1.6 1.2 2.8 0 1.4-1.1 2.5-2.7 3v.2c1.2.5 2 1.4 2.3 3.1.4 2 .6 2.7.9 3.2h-3.2c-.4-.5-.6-1.6-1-3.1-.2-1.4-1-2-2.7-2h-1.4v5.1zm.1-7.3h1.4c1.6 0 3-.5 3-1.9 0-1.2-.9-2-2.7-2-.8 0-1.3.1-1.6.2v3.7z"
        fill="#849daa"
      />
    </g>
  </svg>
);

NutriGuide.defaultProps = {
  tagline: true,
  color: null,
};

NutriGuide.propTypes = {
  tagline: PropTypes.bool,
  color: PropTypes.string,
};

export default NutriGuide;
