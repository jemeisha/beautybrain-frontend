import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

class Map extends Component {
  render() {
    return (
      <MapContainer center={[6.9619, 79.8977]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
      </MapContainer>
    );
  }
}

export default Map;
