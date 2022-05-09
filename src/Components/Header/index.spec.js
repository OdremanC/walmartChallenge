import React from 'react';
import { Provider } from "react-redux"
import { render, screen } from '@testing-library/react';

import { store } from '../../Config/store';

import Header from './';

describe('Hero', () => {
  it('renders searcher place holder', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  })
});
