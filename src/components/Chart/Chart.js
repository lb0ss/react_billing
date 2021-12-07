import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); // extract the dataPoint values from the dataPoint object arrays
    const totalMax = Math.max(...dataPointValues);
    console.log(`dataPointValues`, dataPointValues);
    console.log(`totalMax`, totalMax);
    
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label} />)}
        </div>
    )
}


export default Chart;