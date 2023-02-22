var data = [
    { y: '2021', a: 115, b: 75},
    { y: '2022', a: 120, b: 85},
    { y: '2023', a: 145, b: 85},
    { y: '2021', a: 115, b: 75},
    { y: '2022', a: 120, b: 85},
    { y: '2023', a: 145, b: 85},
    { y: '2021', a: 115, b: 75},
    { y: '2022', a: 120, b: 85},
    { y: '2023', a: 145, b: 85},
    { y: '2024', a: 160, b: 95}
    
  ],
  config = {
    data: data,
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Total Income', 'Total Outcome'],
    fillOpacity: 0.6,
    hideHover: 'auto',
    behaveLikeLine: true,
    resize: true,
    pointFillColors:['#ffffff'],
    pointStrokeColors: ['black'],
    lineColors:['gray','red']
};

config.element = 'bar-chart';
Morris.Bar(config);

