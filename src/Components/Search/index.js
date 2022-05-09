import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InputSearch from '../InputSearch';
import {
  searchFilteredProducts,
  searchProducts,
} from '../../reducer';

import './styles.scss';

const Searcher = () => {
  const search = useSelector((state) => state.main.search)
  const dispatch = useDispatch();
  const [fiel, setField] = useState(search);

  const handleChange = (value) => {
    setField(value);
  };

  const searchData = (value) => {
    dispatch(searchProducts(value))
    dispatch(searchFilteredProducts())
  }

  return (
    <div className='walmart-searcher'>
      <div className='walmart-searcher__input-container'>
        <InputSearch
          value={fiel}
          className="walmart-searcher__search-input"
          onChange={handleChange}
          placeholder="Search"
          searchData={searchData}
        />
      </div>
    </div>
  );
}

export default Searcher;
