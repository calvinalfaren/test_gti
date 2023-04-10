import React from 'react';
import Chart from 'react-apexcharts';

function PieChart() {
  return (
    <>
      <Chart
        type='donut'
        width={400}
        height={400}
        series={[45, 67, 89, 34, 43, 55, 60]}
        options={{
          labels: [
            'offline',
            'AloDoc',
            'Halodoc',
            'SehatQ',
            'GrabHealt',
            'Tokopedia',
            'Shopee',
          ],
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                  },
                },
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
        }}
      />
    </>
  );
}

export default PieChart;
