import React, {Component} from 'react';
import {withAppContext} from './context';


class SimpleBusList extends Component {

  render() {
    return ( this.props.context.showBusList ? (
      <div className="bus-list-container">
        <div className="bus-list-overlay" onClick={this.props.context.closeList}></div>
          <div className="bus-list-div">
            <div>
              <h1>{this.props.StopName}</h1>
              <hr />
              <p>lorem</p>
              <div className="list-item-container"></div>
            </div>
            <button onClick={this.props.context.closeList}>Fecha</button>
          </div>
      </div>
      ) : null);
  }
}

const BusList = withAppContext(SimpleBusList);

export default BusList;