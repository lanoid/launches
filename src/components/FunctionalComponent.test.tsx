import * as React from 'react';
import { shallow } from 'enzyme';
import FunctionalComponent from './FunctionalComponent';

describe('<FunctionalComponent />', () => {
    const functionalComponent = shallow(<FunctionalComponent />);
    
    it('matches snapshot', () => {
        expect(functionalComponent).toMatchSnapshot();
    });
});