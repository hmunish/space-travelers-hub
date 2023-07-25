import renderer from "react-test-renderer";
import Myprofile from "../components/Myprofile";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("test rockets component", () => {
  const mockRockets = [
    {
      id: 1,
      name: "Falcon",
      flickrImages: "",
      description: "Falcon description",
      reserved: false,
    },
    {
      id: 2,
      name: "Starship",
      flickrImages: "",
      description: "Starship description",
      reserved: true,
    },
  ];

  const store = mockStore({
    rocketsList: {
      value: mockRockets,
      loading: false,
      errors: null,
      reservedRocketsName: [],
    },
  });
  it("should match the snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Myprofile />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
