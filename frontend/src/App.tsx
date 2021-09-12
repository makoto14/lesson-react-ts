
import './App.css';
import MainCard from './component/maincard';
import PrimarySearchAppBar from './component/appbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import TodoCard from './component/todo';
import ShoppingMain from './component/shopping/shoppingMain';

function App() {

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <PrimarySearchAppBar></PrimarySearchAppBar>
          <Switch>
              <Route path='/hoge' component={MainCard} />
              <Route path='/todo' component={TodoCard} />
              <Route path='/shopping' component={ShoppingMain} />
          </Switch>
        </Provider>
      </Router>
      
    </div>
  );
}

export default App;
