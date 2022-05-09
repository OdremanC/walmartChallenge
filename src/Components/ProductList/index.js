import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import ProductItem from '../ProductItem';
import NoResults from '../NoPResults';
import Spinner from '../Spinner';

import './styles.scss';

const ProductList = () => {
  const { products, status } = useSelector((state) => state.main);

  return (
    <div className='walmart-products'>
      {Boolean(products.length)
        ? products?.map((element) => (
          <ProductItem {...element} key={uuidv4()} />
        ))
        : <NoResults />
      }
      {status === 'loading' && <Spinner />}
    </div>
  );
}

export default ProductList;
