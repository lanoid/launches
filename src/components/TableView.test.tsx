import * as React from 'react';
import { shallow } from 'enzyme';
import TableView from './TableView';

describe('<TableView />', () => {
    const rocketData = [
        {
            name: 'Daft Punk',
            location: {
                name: 'My house'
            },
            windowstart: 'November 14, 2017 18:28:00 UTC',
            windowend: 'November 14, 2017 18:53:00 UTC'
        }
    ];
    const component = shallow(<TableView launchData={rocketData} />);

    it('renders rocket data accurately', () => {
        expect(component.find('td')).toHaveLength(4);
        expect(component.find('td').get(0).props.children).toBe(rocketData[0].name);
        expect(component.find('td').get(1).props.children).toBe(rocketData[0].location.name);
        expect(component.find('td').get(2).props.children).toBe(rocketData[0].windowstart);
        expect(component.find('td').get(3).props.children).toBe(rocketData[0].windowend);
    });

    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});