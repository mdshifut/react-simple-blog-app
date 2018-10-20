import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BodyHeader.scss';
class BodyHeader extends Component {
  render() {
    return (
      <div className="body-header">
        <div className="row">
          <div className="col-md-6 body-header__left">
            <h4>{this.props.pageTitle} </h4>
            <span>
              <FontAwesomeIcon icon="home" /> / {this.props.pageName}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyHeader;
