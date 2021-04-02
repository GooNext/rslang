import React from 'react';
import PropTypes from 'prop-types';
import FeatureWrapper from './FeatureWrapper';

const FeatureCard = ({ src, title, text }) => (
  <FeatureWrapper>
    <img width="100px" src={src} alt={title} />
    <div>
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  </FeatureWrapper>
);

FeatureCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureCard;
