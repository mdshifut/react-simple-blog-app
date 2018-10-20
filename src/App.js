import React, { Component } from 'react';
import './App.scss';
import Admin from './admin/Admin';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faGhost, faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faGhost, faHome);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Admin />
      </React.Fragment>
    );
  }
}

export default App;
