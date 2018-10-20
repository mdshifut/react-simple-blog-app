import React, { Component } from 'react';
import Header from './header/Header';
import Aside from './aside/Aside';
import Body from './body/Body';
import './Admin.scss';
class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="container-fluid">
          <Header />
          <div className="admin__body">
            <div className="row">
              <div className="col-md-3">
                <Aside />
              </div>
              <div className="col-md-9">
                <Body />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
