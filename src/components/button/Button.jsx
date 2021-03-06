import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = ({
  id,
  children,
  onClick,
  className,
  disabled,
  active,
  invert,
  ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e, id);
    }
  };

  const classes = classNames('btn', className, { active }, { invert });

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      id={id}
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

Button.propTypes = {
  // id: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false
};

export default Button;
