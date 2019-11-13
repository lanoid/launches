import * as React from 'react';

interface Props {
    launchData: any;
}

export default class TableView extends React.Component<Props> {
    constructor(props: Props){
        super(props);
    }
    
    launchRows = (launchData: any) => {
        return launchData.map((launch: any, i: number) => 
            <tr key={i}>
                <td>{launch.name}</td>
                <td>{launch.location.name}</td>
                <td>{launch.windowstart}</td>
                <td>{launch.windowend}</td>
            </tr>
        )
    }
    
    render () {
        const { launchData } = this.props;
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>                    
                        <th>Location</th>
                        <th>Launch Window Start</th>
                        <th>Launch Window End</th>
                    </tr>
                </thead>
                <tbody>
                    {this.launchRows(launchData)}
                </tbody>
            </table>
        );
    }
}