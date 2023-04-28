import Forecast from '../components/Forecast';
import renderWithProviders from './utils';

const forecastday = [{
  date: '2023',
  day: {
    avghumidity: 78,
    avgtemp_c: 1,
    avgvis_miles: 19,
    uv: 1,
    daily_chance_of_rain: 0,
    daily_chance_of_snow: 4,
    condition: {
      icon: 'this',
      text: '11',
    },
  },
}];

describe('It should render the components', () => {
  it('should render Forecast component', () => {
    const screen = renderWithProviders(<Forecast />, {preloadedState: {weather: {Forecast: forecastday}}})
    screen.debug();
  });
});
