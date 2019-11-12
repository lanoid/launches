import * as React from 'react';
import { shallow } from 'enzyme';
import FunctionalHook from './FunctionalHook';

describe('<FunctionalHook />', () => {
    const functionalHook = shallow(<FunctionalHook />);
    
    it('matches snapshot', () => {
        expect(functionalHook).toMatchSnapshot();
    });
});