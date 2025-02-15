/**
 * Chart02
 */
const labels1 = ['A', 'B', 'C', 'T', 'GW'];

const data1 = {
  labels: labels1, // place labels array in correct spot
  datasets: [{
      type: 'line',
      label: 'Line Dataset',
      data: [1,2,3,4,5],
      backgroundColor: 'rgb(0, 0, 255)',
      borderColor: 'rgb(0, 0, 255)',
      xAxisID: 'x2' // Specify to which axes to link
    },
    {
      type: 'scatter',
      backgroundColor: 'rgb(0, 0, 0)',
      borderColor: 'rgb(255, 0, 0)',
      data: [{
        x: 1,
        y: 50
      }, {
        x: 2,
        y: 102
      }, {
        x: 3,
        y: 151
      }, {
        x: 4,
        y: 201
      }, {		  
        x: 5,
        y: 253
      }]
    }
  ],
}


const myChart = new Chart('chartJSContainer', {
  type: 'scatter',
  data: data1,
  options: {
    scales: {
      x: {
        min: 0,
        max: 6,
        ticks: {
          stepSize: 1
        }
      },
      x2: { // add extra axes
        position: 'bottom',
        type: 'category'
      },
      y: {
        min: 0,
        max: 300,
        ticks: {
          stepSize: 50
        },
        grid: {
          display: false
        }
      },
    }
  }
});