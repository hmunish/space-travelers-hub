import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);

describe('test rockets component', () => {
  const mockRockets = [
    {
      id: 1,
      name: 'Falcon',
      flickrImages: '',
      description: 'Falcon description',
      reserved: false,
    },
    {
      id: 2,
      name: 'Starship',
      flickrImages: '',
      description: 'Starship description',
      reserved: true,
    },
  ];

  const store = mockStore({
    rocketsList: {
      value: mockRockets,
      loading: false,
      errors: null,
    },
  });
  it('should match the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
