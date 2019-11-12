import * as React from 'react';
import FunctionalComponent from './FunctionalComponent';
import helper from '../helpers/helper';
import SimpleContext from '../contexts/SimpleContext';
import FunctionalHook from './FunctionalHook';

interface Props {
    hello: string;
};

export default class Component extends React.Component<Props> {

    static defaultProps: Props = {
        hello: 'world',
    }

    render () {
        const { hello } = this.props;
        const greeting = helper();
        
        return (
            <SimpleContext.Provider value={
                {
                    userId: "LAN01D"
                }
            }>
                <div>
                    <h1>{greeting} {hello}</h1>
                    <FunctionalComponent />
                </div>
                <FunctionalHook />
            </SimpleContext.Provider>
        )
    }
}