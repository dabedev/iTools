import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default () => {
    const [queryParameters] = useSearchParams();
    const labels = queryParameters.get("labels")?.split(";") ?? [];
    const title = queryParameters.get("title") ?? "";
    const dataSetLabels = queryParameters.get("dataSetLabels")?.split(";") ?? [];
    const dataSetValues = queryParameters.get("dataSetValues")?.split(";") ?? [];
    const dataSetColors = queryParameters.get("dataSetColors")?.split(";") ?? [];

    const dataSet = dataSetLabels.map((value, i) => {
        var parsedData = dataSetValues[i].split(",").map(val => parseInt(val)) as GLfloat[];
        var parsedColor = `#${dataSetColors[i]}` as string;
        return {
            label: value, data: parsedData, backgroundColor: parsedColor
        }
    })

    const options = {
        plugins: {
            title: {
                display: true,
                text: title,
            },
        },
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const data = {
        labels,
        datasets: dataSet,
    };

    return <Bar options={options} data={data} />;
}