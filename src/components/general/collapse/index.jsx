import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Collapse = ({ title, description, onClick, open }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    onClick(!isOpen);
  };

  return (
    <div className='collapse'>
      <div className='header' onClick={handleIsOpen}>
        {title}
      </div>
      <div className={`description ${isOpen ? 'open' : 'closed'}`}>{description}</div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

Collapse.defaultProps = {
  onClick: () => {},
  open: false,
};

export const CollapseGroup = ({ items }) => {
  const [itemOpen, setItemOpen] = useState(0);
  console.log(itemOpen);
  return (
    <>
      {items.map(({ id, title, description }) => (
        <Collapse
          key={`collapse-item-${id}`}
          title={title}
          description={description}
          onClick={() => setItemOpen(id)}
          open={id === itemOpen}
        />
      ))}
    </>
  );
};

CollapseGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  ),
};

CollapseGroup.defaultProps = {
  items: [],
};

export default Collapse;
