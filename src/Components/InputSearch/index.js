import React from 'react';
import classnames from 'classnames';

import SearchLupIcon from '../../Assets/searchLup.svg';

import styles from './styles.module.scss';

const InputSearch = ({
  value,
  label,
  placeholder,
  onChange,
  searchData,
  onBlur,
  error,
  disabled = false,
}) => {
  const handleChange = (event) => {
    const {
      target: { value: valueInput },
    } = event;
    onChange(valueInput);
  };

  const handlePressEnter = (event) => {
    const {
      target: { value: valueInput },
      charCode
    } = event;

    if (charCode === 13) {
      searchData(valueInput);
    }
  }
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor="input" className={styles.label}>
          {label}
        </label>
      )}
      <input
        className={classnames(error && styles.error)}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyPress={handlePressEnter}
        value={value}
        disabled={disabled}
        aria-label="input-search"
      />
      <span className={styles.searchicon}>
        <img src={SearchLupIcon} alt="search-icon" />
      </span>
    </div>
  );
};

export default InputSearch;
