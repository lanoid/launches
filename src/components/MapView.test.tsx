import * as React from 'react';
import { shallow } from 'enzyme';
import MapView from './MapView';
import * as launches from '../testData/launches';

describe('<MapView />', () => {
    const mapView = shallow(<MapView launchData={launches.default} />);
    
    it('matches the snapshot', () => {
        expect(mapView).toMatchSnapshot();
    });
});