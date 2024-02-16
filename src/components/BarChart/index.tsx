import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { ChartOptions, TooltipOptions, LegendOptions } from 'chart.js';
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
        labels: [" Low Blood Pressure", "Increas Physical Fitness", "Decrease Stress" ,"Increase Happiness", "Meet New Friends"],
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
                    label: function(context) {
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
        <div className={`flex flex-col`}>
        <div className={`h-96 w-96 mb-4`}>
            <Bar data={chartData} options={chartOptions} />
        </div>
        <h2 className={`text-lg font-semibold`}>Backed by Data:</h2>
        <div style={{width:'430px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <p>A National Institutes of Expectations for dog ownership: Perceived physical, mental and psychosocial health among prospective adopters. The percieved benefits pertaining to: </p>
        <li>Mental Health Benefits</li>
         <li>Physical Health Benefits</li>
         <li>Social Wellbeing benefits </li>
         </div>
        </div>

    );
}
