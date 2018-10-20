import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost, faHome } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Admin from './components/admin/Admin';
import BlogHome from './components/blog/BlogHome';

library.add(faGhost, faHome);
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={BlogHome} exact />
          <Route path="/admin" component={Admin} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
