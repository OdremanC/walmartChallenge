import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './';

describe('Card', () => {
  it('renders card content', () => {
    render(<Card>Hello World</Card>);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  })
});

