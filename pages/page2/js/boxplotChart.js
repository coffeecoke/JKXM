$(function () {
    var data = echarts.dataTool.prepareBoxplotData([
        [0,20,60,60,80],
        [0,30,70,70,90],
        [0,20,40,40,60],
        [0,10,15,20,40],
        [0,5,10,10,18]
    ]);
    var boxplotChart = echarts.init(document.getElementById('boxplotChart'));
    var option = {
       
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type : 'line',       // 默认为直线，可选为：'line' | 'shadow'
                backgroundColor:'rgba(239,246,255,0,8)',
                lineStyle:{
                    width:80,
                    // type:"shadow",
                    shadowColor:"#f7faff",
                    opacity:0.5,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 0.9,
                        colorStops: [{
                            offset: 0, color: '#f7faff',opacity:'0.1' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#e3eeff',opacity:'0.1' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                },
                shadowStyle : {              // 阴影指示器样式设置
                    width: 'auto',         // 阴影大小
                    backgroungColor: 'rgba(239,246,255,0,1)'  // 阴影颜色
                }
            }
            
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.axisData,
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false
            },
            axisLabel: {
                formatter: 'WY-1-1-5'
            },
            splitLine: {
                show: false
            },
            lineStyle: {
                type: 'dashed'
            }
        },
        yAxis: {
            type: 'value',
            name: '位移mm',
            max:120,
            
            lineStyle: {
                type: 'dashed'
            }
        },
        series: [
            {
                name: 'boxplot',
                type: 'boxplot',
                data: data.boxData,
                tooltip: {
                    formatter: function (param) {
                        return [
                            'Experiment ' + param.name + ': ',
                            'upper: ' + param.data[5],
                            'Q3: ' + param.data[4],
                            'median: ' + param.data[3],
                            'Q1: ' + param.data[2],
                            'lower: ' + param.data[1]
                        ].join('<br/>')
                    }
                },
                itemStyle:{
                    color:'#3494fd',
                    borderColor:'#3494fd'
                }
            }
        ]
    };
    
    boxplotChart.setOption(option);
})
