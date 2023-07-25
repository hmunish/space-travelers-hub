import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';

const mockStore = configureStore([]);

describe('test Missions component', () => {
  it('should render correct snapshot', () => {
    const mockMissions = [
      {
        id: 1,
        name: 'Mission 1',
        description: 'This is mission 1',
        joined: true,
      },
      {
        id: 2,
        name: 'Mission 2',
        description: 'This is mission 2',
        joined: false,
      },
    ];

    const store = mockStore({
      missionsList: {
        missions: mockMissions,
        isLoading: false,
        isError: false,
      },
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
