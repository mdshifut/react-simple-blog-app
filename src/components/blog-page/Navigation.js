import React, { Component } from 'react';
import axios from 'axios';

class Navigation extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/categories')
      .then(response => this.setState({ categories: response.data }));
  }
  render() {
    return (
      <nav className="main-nav">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <ul>
                <li onClick={() => this.props.navClickHandeler('home')}>
                  Home
                </li>
                {this.state.categories.map(category => {
                  return (
                    <li
                      onClick={() => this.props.navClickHandeler(category)}
                      key={category}
                    >
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-4 text-right">
              <a href="/admin" className="login btn btn-primary">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
