import * as React from 'react';
import * as L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

interface Props {
    launchData?: any;
    position?: [number, number];
}

const MapView: React.FunctionComponent<Props> = (props) => {
    const bounds: [number, number][] = [];
    const icon = L.icon({
        iconUrl: require('../images/space-rocket-icon.png'),
        iconSize:     [20, 20],
        iconAnchor:   [20, 10]       
    })
    const Markers = props.launchData.map((launch: any, i: number) => {
        bounds.push([launch.location.pads[0].latitude, launch.location.pads[0].longitude]);
        return (
            <Marker key={i} position={[launch.location.pads[0].latitude, launch.location.pads[0].longitude]} icon={icon}></Marker>
        )
    });
    return (
        <Map center={props.position} zoom={13} bounds={bounds}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {Markers}
        </Map>
    );
};

MapView.defaultProps = {
    position: [51.000, 0.000]
};

export default MapView;