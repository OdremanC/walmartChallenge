import React from 'react';
import { Provider } from "react-redux"
import { render, screen } from '@testing-library/react';

import { store } from '../../Config/store';

import ProductList from './';

describe('ProductList', () => {
  it('renders item', () => {
    const { container } = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild.className).toEqual('walmart-products');
  });
});

