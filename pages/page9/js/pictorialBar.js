
// 健康状态右侧
$(function () {
    var eChart = echarts.init(document.getElementById('PictorialBar_2'));
    

    var maxData = 1000;

    var option = {
        tooltip: {},
        xAxis: {
            show:false,
            max: maxData,
            splitLine: {
                show: false
            },
            offset: 10,
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                margin: 10
            },
            
        },
        yAxis: {
            show: true,
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#999',
                    fontSize: 16
                }
            },
            data:['完好率','维护率','修复率'],
            nameTextStyle:{
                verticalAlign:'bottom'
            }
        },
        grid: {
            top: 'center',
            height: 200,
            left: 70,
            right: 100
        },
        series: [{
            // current data
            type: 'pictorialBar',
            symbol: 'image://../../imgs/charts/blue-line.png',
            symbolRepeat: 'fixed',
            symbolMargin: '150%',
            symbolClip: true,
            symbolSize: [6,30],
            symbolBoundingData: maxData,
            symbolOffset:[20,-10],
            data: [200, 1220, 660],

            z: 10
        }, {
            // full data
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    opacity: 0.2
                }
            },
            label: {
                normal: {
                    show: true,
                    
                    formatter: function (params) {
                        return (params.value / maxData * 100).toFixed(1) + '%\n';
                    },
                    position: 'left',
                    offset: [0, -10],
                    textStyle: {
                        color: '#397ef7',
                        fontSize: 18
                    }
                },
                

            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '150%',
            symbol: 'image://../../imgs/charts/blue-line.png',
            symbolSize: [6,30],
            symbolBoundingData: maxData,
            symbolOffset:[20,-10],
            data: [200, 1220, 660],
            z: 5
        }]
    };
    eChart.setOption(option);
})

