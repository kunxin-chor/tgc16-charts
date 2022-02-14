// create the options the represent the chart
const options = {
    chart:{
        type:'pie',
        height:'100%'
    },
    // each element in the series represents one slice of the pie
    series:[21,23,22,27,45],
    labels:['English','Mathematics','Mother Tongue','Science','PE'],
    colors:['#12130F','#5B9279','#8FCB9B','#EAE6E5','#8F8073']
}

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();