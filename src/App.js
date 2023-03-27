import logo from './logo.svg';
import './App.css';
import Basket from './components/Basket';
import { Provider } from 'react-redux';
import {store} from "./store";


function App() {
  return (
    <div>
      <Provider store={store}>
      <Basket/>
      </Provider>
    </div>
  );
}

export default App;
