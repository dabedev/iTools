import React from 'react';
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

interface dataSetType {
    label: string,
    data: GLfloat[],
    backgroundColor: string
}

interface BarProps {
    title: string,
    labels: string[],
    dataSet: dataSetType[]
}

export default ({ title, labels, dataSet }: BarProps) => {
    var arr = [] as dataSetType[];
    dataSet.map((a) => {
        arr.push({
            label: a.label,
            data: a.data,
            backgroundColor: a.backgroundColor,
        })
    })
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: title,
            },
        },
    };


    const data = {
        labels,
        datasets: arr,
    };
    return <Bar options={options} data={data} />;
}