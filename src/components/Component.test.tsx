import * as React from 'react';
import { shallow } from 'enzyme';
import Component from './Component';

describe('<Component />', () => {
    const component = shallow(<Component />);
    
    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});