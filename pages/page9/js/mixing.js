$(function () {
    var myChart = echarts.init(document.getElementById('mixingChart'));
    var option = {

        tooltip: {
            trigger: 'axis',

        },
        color:['#397ef7','#cccccc'],
        legend: {
            data: ['本期', '上周'],
            selectedMode: false,
            left:'right',
            top:5
        },
        grid: [{
                top: '20%',
                bottom: '2%',
                left: '2%',
                right:'2%',
                containLabel: true
            }
        ],
        xAxis: [{
            type: 'category',
            data: ['坠砣 j-k-0-0-1', '坠砣 j-k-0-0-1', '坠砣 j-k-0-0-1', '坠砣 j-k-0-0-1', '坠砣 j-k-0-0-1', '坠砣 j-k-0-0-1', '坠砣 j-k-0-0-1']
        }],
        yAxis: [{
            type: 'value',
            min: 200,
            max: 450,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        }],
        series: [{
                name: '本期',
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 1,
                            color:'#397ef7'
                        }
                    }
                },
                data: [400, 374, 251, 300, 420, 400, 440]
            },
            {
                name: '上周',
                type: 'line',
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 1,
                            color:'#cccccc'
                        }
                    }
                },
                data: [320, 332, 301, 334, 360, 330, 350]
            },
            {
                name: '上周2',
                type: 'bar',
                stack: '1',
                barWidth: 2,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [320, 332, 251, 300, 360, 330, 350]
            },
            {
                name: '变化',
                type: 'bar',
                stack: '1',
                itemStyle: {
                    normal: {
                        color: '#f8c138'
                    }
                },
                data: [
                    80, 42,
                    {
                        value: 50,
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        }
                    },
                    {
                        value: 34,
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        }
                    },
                    60, 70, 90
                ]
            }
        ]
    };
    myChart.setOption(option);

})