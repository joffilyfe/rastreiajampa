import React, { Component } from 'react';
import L from 'leaflet';
import {Map as LeafletMap} from 'leaflet';
import {LeafletContext} from './context';
import Marker from './Marker';

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.containerRef = React.createRef();
    this.config = {
      map: "https://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/normal.day/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}",
      options: {
        "attribution": "Map &copy; 1987-2014 <a href='https://developer.here.com'>HERE</a>",
        "base": "base",
        "type": "maptile",
        "mapID": "newest",
        "app_id": "AXOe436PxWbYjlecdvLz",
        "app_code": "VFyswxuc1jtQ6TV6iJyg2w",
        "minZoom": 10,
        "maxZoom": 18,
        "size": 256,
        "format": "png8",
        "language": "eng",
        "subdomains": "1234",
      }
    }

    this.state = {
      locationFound: false,
      currentLatLng: null
    }
  }

  handleLocationFound = (e) => {
    this.setState(state => ({
      locationFound: true,
      currentLatLng: e.latlng
    }));
  }

  handleLocationError = (e) => {
    console.log(e.message);
  }

  createLeafletElement(props) {
    const {viewPort, options} = props;
    return new LeafletMap(viewPort, options);
  }

  componentDidMount() {

    this.leafletElement = this.createLeafletElement({
      viewPort: this.containerRef.current,
      options: this.config
    });

    this.contextValue = {
      layerContainer: this.leafletElement,
      map: this.leafletElement,
    }

    this.contextValue.map.setView([this.props.latitude, this.props.longitude], 14);
    L.tileLayer(this.config.map, this.config.options).addTo(this.contextValue.map)

    if (this.props.locate) {
      this.leafletElement.locate({setView: true, maxZoom: 18})
      this.leafletElement.on('locationfound', this.handleLocationFound);
      this.leafletElement.on('locationerror', this.handleLocationError);
    }

    this.forceUpdate();
  };

  render() {
    return (
      <div id="domMap" ref={this.containerRef}>
        {this.contextValue ? (
          <LeafletContext.Provider value={this.contextValue}>       
            {this.props.children}

            {this.state.locationFound ? (
              <Marker LatLng={this.state.currentLatLng} currentLocation />
            ) : null}
          </LeafletContext.Provider>
        ) : null}
      </div>  
    );
  }
}