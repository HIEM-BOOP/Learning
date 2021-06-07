import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import TodoFeature from './features/todo/pages/index';
import AlbumFeature from './features/album/pages/index';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" component={AlbumFeature} exact/>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
    </Router>
  );
}

export default App;
