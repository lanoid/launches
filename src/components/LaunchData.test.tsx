import * as React from 'react';
import { shallow } from 'enzyme';
import LaunchData from './LaunchData';

describe('<LaunchData />', () => {
    const component = shallow(<LaunchData />);
    
    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});