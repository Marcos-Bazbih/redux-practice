import { Provider } from "react-redux";
import AppRouter from "./App-Router";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;