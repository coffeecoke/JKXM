

$(function () {
    var eChart = echarts.init(document.getElementById('scatterChart1'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4,
            padding:10,
            textStyle:{
                color:"#000"
            }, 
            formatter: function (params) {
                return "桥梁编号" + ': ' + params[0].name+"<br/>"+
                        "维修量"+":"+params[0].data
            },
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3)'    
        },
        xAxis: {
            data: ['10天', ' 15天', ' 30天', '180天', '365天', '540天','720天'],
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
            name: '位移mm',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        color: ['#3494fd'],
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-40%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [10, 30, 50, 80, 90, 100,120],
            z: 10
        }, {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-120%',
            symbolPosition: 'end',
            symbolSize: 0,
            symbolOffset: [0, '-140%'],
            // data: [{
            //     value: 120,

            // }, {
            //     value: 60,

            // }, {
            //     value: 70,

            // }, {
            //     value: 90,

            // }, {
            //     value: 60,

            // }, {
            //     value: 120,

            // }]
        }]
    };
    eChart.setOption(option);
})