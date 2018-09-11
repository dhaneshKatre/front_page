import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

class MapTile extends React.Component {
    render() {
        const position = [this.props.lat, this.props.lon];
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
            </Map>
        );
    }
}

export default MapTile;
