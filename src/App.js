import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './core/Map';
import Marker from './core/Marker';

class App extends Component {

  constructor(props) {
    super(props);

    this.busStopList = [
      {
        LatLng: {lat: "-7.14925001375377", lng:"-34.8426000215113"},
        name: "TRA201CEASA / UNIPÊFIM 201"
      }
    ];
  }

  render() {
    return (
      <div>
        <Map latitude="-7.1183516" longitude="-34.8504913" locate>
          <Marker LatLng={this.busStopList[0].LatLng} StopName={this.busStopList[0].name} isBusStop />
        </Map>
      </div>
    );
  }
}

export default App;