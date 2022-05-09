import React from 'react';
import { Provider } from "react-redux"
import { render, screen } from '@testing-library/react';

import { store } from '../../Config/store';

import Search from './';

describe('Search', () => {
  it('renders Search', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByLabelText(/input-search/i)).toBeInTheDocument();
  });
});

