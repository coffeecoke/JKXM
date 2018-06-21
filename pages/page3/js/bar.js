$(function () {
    var myChart = echarts.init(document.getElementById('bar'));
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
                console.log(params);
                return "钢轨编号" + ': ' + params[1].name + "<br/>" +
                    '<span style="color:#666;font-size:12px;">位移量:' + params[1].data + '</span>'
            },

        },
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
    myChart.setOption(option);
})