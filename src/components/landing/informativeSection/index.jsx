import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LEFT = 'left';
const RIGHT = 'right';

const InformativeSection = ({ title, description, img, position }) => {
  const className = `informative-section ${position === LEFT && 'left'}`;

  return (
    <article className={className}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <p>{description}</p>
      </div>
      <img className='img' src={img} alt='' />
    </article>
  );
};

InformativeSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  position: PropTypes.oneOf([LEFT, RIGHT]),
};

InformativeSection.defaultProps = {
  title: '',
  description: '',
  img: '',
  position: RIGHT,
};

export default InformativeSection;
