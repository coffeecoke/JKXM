$(function () {
    var data = [
        [10, 10],
        [15, 40],
        [30, 60],
        [150,120],
        [180, 100],
        [365, 120],
        [540, 50],
        [720, 60],
        
    ];
    var scatter = echarts.init(document.getElementById('scatter'));
    // See https://github.com/ecomfe/echarts-stat
    var myRegression = ecStat.regression('polynomial', data);
    
    myRegression.points.sort(function(a, b) {
        return a[0] - b[0];
    });
    
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
                    totle += data[i][1]
                };
                return "未来" + ': ' + params[0].name+"<br/>"+
                        '<span style="color:#666;font-size:12px;">维修量:'+totle+'</span>'
            },
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'line',       // 默认为直线，可选为：'line' | 'shadow'
                backgroundColor:'rgba(239,246,255,0,8)',
                lineStyle:{
                    width:2,
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
            },
            
        },
        grid: {
            top:'6%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            name:'天',
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            // splitNumber: 20,
            // axisLabel :{
            //     align:'center'
            // },
            
        },
        yAxis: {
            type: 'value',
            
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        series: [{
            name: 'scatter',
            type: 'scatter',
            symbolSize: function(data) {
                return Math.sqrt(data[1])*2;
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'left',
                    textStyle: {
                        color: 'blue',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowColor: '#3494fd',
                    shadowOffsetY: 5,
                    color: '#3494fd'
                }
            },
            data: data
        },
        {
            name: 'line',
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: myRegression.points,
            lineStyle:{
                normal:{
                    color:"#acacad"
                }
            },
            markPoint: {
                
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        formatter: myRegression.expression,
                        textStyle: {
                            color: '#333',
                            fontSize: 14
                        }
                    }
                },
                data: [{
                    coord: myRegression.points[myRegression.points.length - 1]
                }]
            }
        }
    ]
    };
    scatter.setOption(option);
    
})