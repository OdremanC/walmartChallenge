import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import InputSearch from './';

describe('InputSearch', () => {
  it('renders input search', () => {
    render(<InputSearch value="test" placeholder="Search" />);
    expect(screen.getByLabelText(/input-search/i)).toBeInTheDocument();
  });

  it('should call onChange method', () => {
    const onChangeMock = jest.fn();
    render(<InputSearch value="test" placeholder="Search" onChange={onChangeMock} />);
    fireEvent.change(screen.getByLabelText(/input-search/i), {target: {value: 'searched'}})
    expect(onChangeMock).toBeCalledTimes(1)
  });

  it('should call onKeyPress method', () => {
    const onKeyPressMock = jest.fn();
    render(<InputSearch value="test" placeholder="Search" searchData={onKeyPressMock} />);
    fireEvent.keyPress(screen.getByLabelText(/input-search/i), {
      target: { value: 'searched' },
      key: 'Enter',
      charCode: 13,
    })
    expect(onKeyPressMock).toBeCalledTimes(1)
  });

  it('should call onBlur method', () => {
    const onBlurMock = jest.fn();
    render(<InputSearch value="test" placeholder="Search" onBlur={onBlurMock} />);

    fireEvent.focus(screen.getByLabelText(/input-search/i));
    fireEvent.focusOut(screen.getByLabelText(/input-search/i));
    expect(onBlurMock).toBeCalledTimes(1)
  });
})



