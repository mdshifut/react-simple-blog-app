import React, { Component } from 'react';
import './Aside.scss';
class Aside extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="#test">Post</a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Aside;
