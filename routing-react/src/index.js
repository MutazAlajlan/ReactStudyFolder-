import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './Info';
import Contact from './Contact';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import PageNotFound from './PageNotFound';

ReactDOM.render(
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      <li>
      <Link to="/info">Information</Link>
      </li>
    </ul>
    <Switch>
    <Route exact path='/' component = {App} />
    <Route path='/contact' component={Contact} />
    <Route path='/info/:name' component={Info} />
    <Route component = {PageNotFound} />
    </Switch>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
