import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserComponent from './components/UserComponent';

function App() {

  return (
      <Provider store={store}>
        <CakeContainer />
        <HookCakeContainer />
        <HookIceCreamContainer />
        <NewCakeContainer />
        <UserComponent />
      </Provider>
  )
}

export default App
