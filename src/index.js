import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// component
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/App.css';

  <Router>
    <Route exact path="/">
      <TodoContainer />
    </Route>
  </Router>;

ReactDOM.render(<TodoContainer />, document.getElementById('root'));
