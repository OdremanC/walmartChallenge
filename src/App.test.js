import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './Config/store';
import App from './App';

test('renders Servicio al cliente in hero', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText(/Servicio al cliente/i)).toBeInTheDocument();
});
