import * as React from 'react';
import launchReducer from '../helpers/launchReducer';
import Chart = require('chart.js');

interface Props {
    launchData?: any;
}

interface launch {
    label: string;
    data: any[];
    backgroundColor: string;
}

interface locations {
    labels: any[];
    datasets: launch[]
}

const GraphView: React.FunctionComponent<Props> = (props) => {
    const launches = launchReducer(props.launchData);
    const canvas: React.Ref<HTMLCanvasElement> = React.createRef();

    const launchCount = (launches: any) => {
        let locations = []
        for (let launchLocation in launches) {
            locations.push(
                <dd key={launchLocation} className={`percentage percentage-${launches[launchLocation].length}`}>{launchLocation} {launches[launchLocation].length}</dd>
            )
        }
        return locations;
    }

    const launchesByLocation = (launches: any) => {
        let locations: locations = {
            labels: [],
            datasets: [
                {
                    label: 'launches',
                    data: [],
                    backgroundColor: '#FFF'
                }
            ],
        };
        for (let launchLocation in launches) {
            locations.labels.push(launchLocation);
            locations.datasets[0].data.push(launches[launchLocation].length);
        }
        return locations;
    }

    React.useEffect(() => {
        new Chart(canvas.current.getContext('2d'), {
            type: 'bar',
            data: launchesByLocation(launches),
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                }
            }
        });
    });

    return (
        <div>
            <dl>
                <dt>Launches:</dt>
                {launchCount(launches)}
            </dl>
            <canvas id="chart" ref={canvas}></canvas>
        </div>
    );
};

export default GraphView;