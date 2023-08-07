import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Details from '../components/Details/Details';

const mockStore = configureStore([]);

describe('Details', () => {
  test('renders loading spinner when regions are not loaded', () => {
    const initialState = {
      data: {
        countries: [],
        regions: [],
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );

    const loadingSpinner = screen.queryByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});