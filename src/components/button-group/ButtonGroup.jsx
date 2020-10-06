import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ButtonGroup.css';

const ButtonGroup = ({ id, children, className, vertical, ...attrs }) => {
  const classes = classNames('btn-group', className, { vertical });
  console.log(children);

  return (
    <div id={id} className={classes} {...attrs}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool
};

ButtonGroup.defaultProps = {
  id: PropTypes.string.isRequired,
  children: null,
  className: '',
  vertical: false
};

export default ButtonGroup;
