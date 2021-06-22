
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

function App() {

  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <PrimarySearchAppBar></PrimarySearchAppBar>
          <Switch>
              <Route path='/hoge' component={MainCard} />  
          </Switch>
        </Provider>
      </Router>
      
    </div>
  );
}

export default App;
