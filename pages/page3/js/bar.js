$(function () {
    var myChart = echarts.init(document.getElementById('bar'));
    var option = {
        xAxis: {
            data: ['监测点01 ', '监测点02 ', '监测点03 ', '监测点04 ','监测点05 ', '监测点06 ', '监测点07 ', '监测点09 ', '监测点10 ', '监测点11 ', '监测点12 ', '监测点13 ', '监测点14 '],
            
        },
        yAxis: {
            name:'垂直加速度同期变化量',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        grid: {
            left: '4%',
            right: '3%',
            // top:'5%',
            bottom: '0',
            containLabel: true
        },
        animationDurationUpdate: 1200,
        series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#ddd'
                }
            },
            silent: true,
            barWidth: 6,
            barGap: '-100%', // Make series be overlap
            data: [60, 60, 60, 60,60, 60, 60, 60,60, 60, 60, 60,60,60]
        }, {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#4988fa'
                }
            },
            barWidth: 6,
            z: 10,
            data: [45, 50, 20, 25,10,35,45, 50, 20, 25,10,35,45, 50]
        }]
    };
    
    
    
    // var barGaps = ['30%', '-50%'];
    // var loopIndex = 0;
    
    // setInterval(function () {
    //     var barGap = barGaps[loopIndex];
    
    //     myChart.setOption({
    //         xAxis: {
    //             axisLabel: {
    //                 formatter: 'barGap: \'' + barGap + '\''
    //             }
    //         },
    //         series: [{
    //             barGap: barGap
    //         }]
    //     });
    //     loopIndex = (loopIndex + 1) % barGaps.length;
    
    // }, 200000);
    myChart.setOption(option);
})