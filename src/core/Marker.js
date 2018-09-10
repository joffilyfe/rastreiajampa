import React, { Component} from 'react';
import {LeafletContext} from './context';
import L, { Marker as LeafletMarker } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import BusList from './BusList';
import {AppContext} from './context';
import {getBusList} from '../util/Api';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});


class Marker extends Component {

  constructor(props) {
    super(props);
    this.leafletElement = new LeafletMarker(props.LatLng, {icon: DefaultIcon});

    if (!!props.leaflet) {
      this.leafletElement.addTo(props.leaflet.map);
    }

    if (props.currentLocation) {
      this.leafletElement.bindPopup('You are here');
    }

    if (props.isBusStop) {
      this.leafletElement.on('click', () => {
        getBusList(props);

        this.setState(state => ({
          showBusList: true
        }));
      });
    }

    this.closeList = () => {
      this.setState(state => ({
        showBusList: false
      }));
    }

    this.state = {
      showBusList: false,
      background: 'red',
      closeList: this.closeList
    }

  }

  render() {
    return (
      <div>
        <AppContext.Provider value={this.state}>
          { this.props.isBusStop ? (
            <BusList StopName={this.props.StopName}/>
          ) : null }
        </AppContext.Provider>
      </div>
    );
  }
}


export default props => (
  <LeafletContext.Consumer>
    {leaflet => <Marker {...props} leaflet={leaflet}></Marker>}
  </LeafletContext.Consumer>
);