import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrentView from '../components/CurrentView';
import store from '../redux/store';

const mockCountryItem = {
  cloud: 'cloud',
  name: 'name',
  conditionText: 'conditionText',
  conditionIcon: 'conditionIcon',
  humidity: 'humidity',
  lastUpdated: 'lastUpdated',
  windDegree: 'windDegree',
  tempreture: '10',
};

describe('Renders without crashing', (() => {
  it('CountryItem to Match Snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/country:current" Component={<CurrentView country={mockCountryItem} />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
}));

// test('renders current view component', () => {

//   const { getByText } = renderer(<CurrentView country={mockCountryItem} />);
//   const linkElement = getByText(/country/i);
//   expect(linkElement).toBeInTheDocument();
// });
