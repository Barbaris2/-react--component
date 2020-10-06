import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ value, circle, className, inline, outer, ...attrs }) => {
  const text = typeof value === 'string' || value instanceof String;
  // проверка на строку. Дело в том, что если значение number то оно будет рендорится внутри бэйджика с фиксированными размерами, а если String то бэйдж будет подстраиваться под разиеры контента

  const classes = classNames(
    'badge',
    { circle },
    className,
    { inline },
    { outer },
    { text },
    { warning: attrs.warning },
    { alert: attrs.alert },
    { success: attrs.success },
    { info: attrs.info }
  );

  return <span className={classes}>{value}</span>;
};

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  circle: PropTypes.bool,
  className: PropTypes.string,
  inline: PropTypes.bool,
  outer: PropTypes.bool
};

Badge.defaultProps = {
  circle: false,
  className: '',
  inline: false,
  outer: false
};

export default Badge;
