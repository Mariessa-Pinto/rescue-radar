import { useState } from "react";
import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart() {
    const [chartData, setChartData] = useState({
        labels: [" Low Blood Pressure", "Increas Physical Fitness", "Decrease Stress", "Increase Happiness", "Meet New Friends"],
        datasets: [
            {
                label: "Dog Owners",
                data: [42.6, 48.1, 76.4, 91.2, 51.1],
                borderColor: 'rgb(196, 28, 76)',
                backgroundColor: 'rgba(196, 28, 76, 0.4)'
            },
            {
                label: "Non-Dog 0wners",
                data: [30, 52, 67, 85, 49],
                borderColor: 'rgb(31, 203, 255)',
                backgroundColor: 'rgba(31, 203, 255, 0.4)'
            }
        ]
    });

    const chartOptions: ChartOptions<'bar'> = {
        plugins: {
            legend: {
                position: 'top' as 'top',
            },
            title: {
                display: true,
                text: "Percieved Benefits of Dog Ownership"
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                enabled: false,
                callbacks: {
                    label: function (context) {
                        var label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + '%';
                        }
                        return label;
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
            axis: 'x'
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Percent of surveyed participants',
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Benefit expectations of owning a Dog',
                },
                ticks: {
                    autoSkip: false
                }
            }
        },
        maintainAspectRatio: false,
        responsive: true
    };
    return (
        <div data-testid="barchart" className={`flex flex-col lg:flex-row items-center lg:gap-32 lg:items-center lg:ml-16`}>
            <div className={`h-430 mb-4 lg:mr-8 lg:ml-8 lg:mr-0`}>
                <Bar data={chartData} options={chartOptions} />
            </div>
            <div data-testid="chart" className={`flex flex-col lg:w-96`}>
                <h2 className={`font-outfit text-lg lg:text-xl font-semibold mb-4 lg:mb-0`}>Backed by Data:</h2>
                <div className={`w-full mb-10`}>
                    <p className="font-outfit text-base lg:text-lg">A National Institutes of Expectations for dog ownership: Perceived physical, mental and psychosocial health among prospective adopters. The perceived benefits pertaining to:</p>
                    <ul className="text-base font-outfit lg:text-lg">
                        <li>Mental Health Benefits</li>
                        <li>Physical Health Benefits</li>
                        <li>Social Wellbeing benefits</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
