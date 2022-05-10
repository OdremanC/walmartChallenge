import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import { currencyFormatter } from '../../Utils/serializer';

import './styles.scss';

const ProductItem = ({
  id,
  brand,
  description,
  image,
  price,
  discount,
  newPrice,
}) => {
  const formatedPrice = newPrice ? currencyFormatter(newPrice) : currencyFormatter(price)
  return (
    <Card className='walmart-product-item'>
      <div className='walmart-product-item__img'>
        <img src={image} alt={description} />
      </div>
      <div className='walmart-product-item__info'>
        <h3 className='walmart-product-item__brand'>{brand}</h3>
        <p className='walmart-product-item__description'>{description}</p>
        <div className='walmart-product-item__price-container'>
          <span className='walmart-product-item__price'>${formatedPrice}</span>
          {discount && (
            <span className='walmart-product-item__discount'>{discount} OFF</span>
          )}
        </div>
        {newPrice && (
          <span className='walmart-product-item__old-price'>${currencyFormatter(price)}</span>
        )}
      </div>
    </Card>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.string,
  newPrice: PropTypes.number,
}

ProductItem.defaultProps = {
  discount: '',
  newPrice: null,
};

export default ProductItem;
