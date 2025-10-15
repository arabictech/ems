import React from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const data = {
        labels: ["Female", "Male", "Female", "Male"],
        datasets: [
            {
                
                data: [20, 4, 8, 9],
                backgroundColor: ["#4c3575", "#7d63a8ff", "#a18cc4ff", "#d3c2f0ff"],
                hoverOffset: 4,
                cutout: "75%",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1.5,
    };
    return (
        <div style={{ width: '80%', height: '280px' }}>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default Chart

export const AttendanceChart = () => {
    const data = {
        labels: ["Present", "Absent", "Leave", "Holiday"],
        datasets: [
            {
                data: [20, 3, 5, 2],
                backgroundColor: ["#4c3575", "#7d63a8ff", "#a18cc4ff", "#d3c2f0ff"]
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1.5,
    };
    return (
        <div style={{ width: '80%', height: '250px' }}>
            <Bar data={data} options={options} />
        </div>
    )
}

export const LeaveChart = () => {
    const data = {
        labels: ["Approved", "Denied", "Pending"],
        datasets: [
            {
                data: [20, 10, 7],
                backgroundColor: ["#4c3575", "#7d63a8ff", "#a18cc4ff"],
                hoverOffset: 4,
                cutout: "75%",
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1.5,
    };
    return (
        <div style={{ width: '80%', height: '250px' }}>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export const SalaryChart = () => {
    const data = {
        labels: ["Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Average Salary (₹)",
                data: [50000, 52000, 54500, 56000],
                borderColor: "#4c3575",

            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1.5,
    };
    return (
        <div style={{ width: '80%', height: '250px' }}>
            <Line data={data} options={options} />
        </div>
    )
}