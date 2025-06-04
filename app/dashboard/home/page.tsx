'use client';

import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById('visitorsChart');
    if (!canvas) {
      console.error('Canvas element with ID "visitorsChart" not found');
      return;
    }
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx) {
      console.error('Failed to get 2D context for canvas');
      return;
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Apr 1', 'Apr 7', 'Apr 13', 'Apr 20', 'Apr 27', 'May 4', 'May 11', 'May 18', 'May 25', 'Jun 1', 'Jun 7', 'Jun 14', 'Jun 21', 'Jun 29'],
        datasets: [
          {
            label: 'Mobile',
            data: [50, 70, 90, 110, 130, 150, 140, 130, 120, 130, 230, 200, 180, 160],
            borderColor: '#000000',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            fill: true,
            pointBackgroundColor: '#000000',
            pointRadius: 4,
            pointHoverRadius: 6,
            pointHitRadius: 10,
          },
          {
            label: 'Desktop',
            data: [30, 40, 60, 80, 100, 120, 110, 100, 90, 100, 178, 150, 130, 110],
            borderColor: '#000000',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            fill: true,
            pointBackgroundColor: '#000000',
            pointRadius: 4,
            pointHoverRadius: 6,
            pointHitRadius: 10,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: { display: false },
            ticks: { font: { size: 12 } },
          },
          y: {
            beginAtZero: true,
            title: { display: false },
            ticks: { display: false },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            position: 'nearest',
            callbacks: {
              label: function(context) {
                return `${context.dataset.label}: ${context.raw}`;
              },
              title: function(tooltipItems) {
                return tooltipItems[0].label === 'May 25' ? 'May 30' : tooltipItems[0].label;
              },
            },
            backgroundColor: '#ffffff',
            titleColor: '#000000',
            bodyColor: '#000000',
            borderColor: '#000000',
            borderWidth: 1,
          },
        },
        interaction: {
          mode: 'nearest',
          intersect: false,
        },
      },
    });
  }, []);

  return (
    <div style={{ width: '100%', height: '300px', padding: '20px', background: '#f9f9f9', borderRadius: '10px' }}>
      <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>Total Visitors</div>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>Total for the last 3 months</div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', background: '#fff' }}>Last 3 months</button>
        <button style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', background: '#fff' }}>Last 30 days</button>
        <button style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px', background: '#fff' }}>Last 7 days</button>
      </div>
      <canvas id="visitorsChart"></canvas>
    </div>
  );
}