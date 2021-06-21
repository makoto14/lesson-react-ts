
import './App.css';
import MainCard from './component/maincard';
import PrimarySearchAppBar from './component/appbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Switch>
          <Route path='/hoge' component={MainCard} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
