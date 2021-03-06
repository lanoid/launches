import * as React from 'react';
import DictionaryContext from '../contexts/DictionaryContext';
import TableView from './TableView';
import GraphView from './GraphView';
import MapView from './MapView';

interface Props {
    
}

interface State {
    launchData?: any;
    startDate?: string;
    endDate?: string;
}

export default class LaunchData extends React.Component<Props, State> {
    static today = new Date();
    static yesterday = new Date();
    
    constructor(props: Props){
        super(props);
        LaunchData.yesterday.setDate(LaunchData.today.getDate() -30);
        this.state = {
            launchData: {},
            endDate: LaunchData.today.toISOString().split('T')[0],
            startDate: LaunchData.yesterday.toISOString().split('T')[0]
        }
    }

    fetchLaunchData = async (event: any) => {
        event.preventDefault();
        const response = await fetch(`https://launchlibrary.net/1.4/launch/${this.state.startDate}/${this.state.endDate}`);
        const data = await response.json();
        await this.setState({
            launchData: data
        })
    }

    setStart = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            startDate: e.currentTarget.value
        })
    }

    setEnd = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            startDate: e.currentTarget.value
        })
    }

    render () {
        const { startDate, endDate, launchData } = this.state;
        const { launches } = launchData;
        return (
            <section id="launchData">
                <form onSubmit={this.fetchLaunchData}>
                    <DictionaryContext.Consumer>
                        {({labels}) => (
                            <fieldset>
                                <label htmlFor="startDate">{labels.startInputLabel}</label>
                                <input type="date" defaultValue={startDate} onChange={this.setStart} name="startDate" />
                                <label htmlFor="startDate">{labels.endInputLabel}</label>
                                <input type="date" defaultValue={endDate} onChange={this.setEnd} name="endDate" />
                                <input type="submit" value={labels.submitLabel}/>
                            </fieldset>
                        )}
                    </DictionaryContext.Consumer>
                </form>
                {launches && 
                    <div>
                        <TableView launchData={launches} />
                        <GraphView launchData={launches} />
                        <MapView launchData={launches} />
                    </div>
                }
            </section>   
        )
    }
}
