import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

const Card = ({ className, children, id }) => (
  <div className={classnames(styles.container, className)} id={id}>
    {children}
  </div>
);

export default Card;
