import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Card = ({ className, children, id }) => (
  <div className={classnames(styles.container, className)} id={id}>
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  id: PropTypes.string,
}

Card.defaultProps = {
  className: '',
  id: '',
};

export default Card;
