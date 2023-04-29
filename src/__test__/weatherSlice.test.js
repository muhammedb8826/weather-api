import weatherReducer, { initialState, getCurrent } from '../redux/weather/weatherSlice';

describe('weather slice reducer', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle getChapters.pending', () => {
    const nextState = weatherReducer(initialState, getCurrent.pending());
    expect(nextState.isLoading).toEqual(true);
  });

  it('should handle getCurrent.fulfilled', () => {
    const payload = {
      location: {
        name: 'Addis Abeba',
        country: 'Ethiopia',
      },
      current: {
        temp_c: 10,
        cloud: 84,
        humidity: 86,
        wind_degree: 105,
        condition: {
          text: 'Patchy rain',
        },
      },
    };
    const nextState = weatherReducer(initialState, getCurrent.fulfilled(payload));
    expect(nextState.Current).toEqual(payload);
    expect(nextState.isLoading).toEqual(false);
  });

  it('should handle getCurrent.rejected', () => {
    const nextState = weatherReducer(initialState, getCurrent.rejected());
    expect(nextState.isLoading).toEqual(false);
  });
});
