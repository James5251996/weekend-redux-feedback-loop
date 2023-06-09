import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route, Link} from "react-router-dom";
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';


function App() {

  return (<>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
    <Router>
      <Route path='/' exact>
        <Feeling />
      </Route>
      <Route path='/understanding'>
        <Understanding/>
      </Route>
      <Route path='/supported'>
        <Supported/>
      </Route>
      <Route path='/comments'>
        <Comments/>
      </Route>
      <Route path='/review'>
        <Review/>
      </Route>
      <Route path='/success'>
        <Success/>
      </Route>
      <Route path='/admin'>
        <Admin/>
      </Route>
    </Router>
  </>)
}

export default App;
