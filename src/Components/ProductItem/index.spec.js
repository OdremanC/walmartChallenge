import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductItem from './';

describe('ProductItem', () => {
  it('renders item', () => {
    render(<ProductItem brand="LG" value="test" price={2300} />);
    expect(screen.getByText(/LG/i)).toBeInTheDocument();
  });
});

