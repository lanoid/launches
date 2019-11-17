import * as React from 'react';
import { shallow } from 'enzyme';
import GraphView from './GraphView';
import * as launches from '../testData/launches';

describe('<Graphview />', () => {
    const graphView = shallow(<GraphView launchData={launches.default} />);
    
    it('matches the snapshot', () => {
        expect(graphView).toMatchSnapshot();
    });
});