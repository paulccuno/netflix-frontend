import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CatalogCarousel = ({ title, items, renderItem }) => {
  return (
    <div className='catalog-carousel'>
      <h3 className='title'>{title}</h3>
      <div className='items'>{items.map(item => renderItem(item))}</div>
    </div>
  );
};

CatalogCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  renderItem: PropTypes.func,
};

CatalogCarousel.defaultProps = {
  title: '',
  items: [],
  renderItem: () => {},
};

export default CatalogCarousel;
