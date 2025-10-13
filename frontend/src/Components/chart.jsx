import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const data = {
        labels: ["Female", "Male","Female", "Male"],
        datasets: [
            {
                label: "Present",
                data: [2, 4],
                backgroundColor: ['#FF6384', '#36A2EB'], // Example colors
                hoverOffset: 4,
                cutout: "75%",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Essential for independent sizing
        aspectRatio: 1.5, // You can remove this if you want full control via CSS
    };
    return (
        <div style={{ width: '80%', height: '280px' }}> {/* Set desired width here */}
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default Chart
