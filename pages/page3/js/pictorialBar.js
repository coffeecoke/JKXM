$(function () {
    var eChart = echarts.init(document.getElementById('PictorialBar_1'));
    var data = [60, 50,40, 30, 20, 10];
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            backgroundColor: '#fff', // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc', // 提示边框颜色
            borderRadius: 4,
            padding: 10,
            textStyle: {
                color: "#000"
            },
            extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)',
            formatter: function (params) {

                var totle = 0;
                for (var i = 0; i <= params[0].dataIndex; i++) {
                    totle += data[i]
                };
                return "钢轨编号" + ': ' + params[0].name + "<br/>" +
                    '<span style="color:#666;font-size:12px;">位移量:' + totle + '</span>'
            },

        },
        xAxis: {
            data: ['监测点01', '监测点02', '监测点03', '监测点04', '监测点05', '监测点06'],
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#c5c5c5'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '垂直加速',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        color: ['#3494fd'],
        grid: {
            left: '2%',
            right: '3%',
            bottom: '0',
            containLabel: true
        },
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-100%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            symbolSize: ['50%', '100%'],
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: data,
            z: 10
        }]
    };
    eChart.setOption(option);
})

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

