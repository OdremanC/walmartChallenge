import React from 'react';
import { render, screen } from '@testing-library/react';

import Hero from './';

describe('Hero', () => {
  it('renders Servicio al cliente', () => {
    render(<Hero />);
    expect(screen.getByText(/Servicio al cliente/i)).toBeInTheDocument();
  });
});

