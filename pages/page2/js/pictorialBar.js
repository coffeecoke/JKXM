$(function () {
    var eChart = echarts.init(document.getElementById('PictorialBar_1'));
    var data =[10, 30, 50, 80, 90, 100,120];
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',      // 提示边框颜色
            borderRadius: 4,
            padding:10,
            textStyle:{
                color:"#000"
            }, 
            extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)' ,
            formatter: function (params) {
                
                var totle = 0;
                for(var i=0;i<=params[0].dataIndex;i++) {
                    totle += data[i]
                };
                return "坠跎编号" + ': ' + params[0].name+"<br/>"+
                        '<span style="color:#666;font-size:12px;">位移量:'+totle+'</span>'
            },
            
        },
        xAxis: {
            data: ['WY-1-1-5', ' WY-1-1-5', 'WY-1-1-5', 'WY-1-1-5', 'WY-1-1-5', 'WY-1-1-5','WY-1-1-5'],
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
            symbolSize:['50%','100%'],
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data:data,
            z: 10
        }]
    };
    eChart.setOption(option);
})

