$(function () {
    var myChart= echarts.init(document.getElementById('linecharts'));
    option = {
        xAxis: {
            type: 'category',
            data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06']
        },
        yAxis: {
            type: 'value',
            min:0,
            max:120
        },
         grid:{
             top:'10%',
             left:'2%',
             right:'2%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: [20,60,50,80,50,120],
            type: 'line',
            smooth: true,
            itemStyle:{
                color:'#3494fd'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#75b4fe'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }])
                }
            },
        }]
    };
myChart.setOption(option);
})


$(function () {
    var myChart2 = echarts.init(document.getElementById('linecharts2'));
    var option = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        // '{a} <br/>{b} : {c}'
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4,
            padding:10,
            
            textStyle:{
                color:"#000"
            },   
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
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
            },
            extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)' ,
        },
        color:["#5b85f3","#ff6774"],
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'平均告警次数',icon:'rect'},
                {name:'近年告警次数',icon:'rect'},
            ]
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', "2017-10", "2017-11", "2017-12"]
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series: [
           
            {
                name: '平均告警次数',
                type: 'line',
                smooth: true,
                symbol: 'none',
                data: [25, 60, 20, 80, 23, 42, 30, 120, 50, 80, 120, 140],
                lineStyle: {
                    normal: {
                        color: '#5b85f3'
                    }
                },
                zIndex:1,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5b85f3'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }])
                    }
                },
            },
            {
                name: '近年告警次数',
                type: 'line',
                symbol: 'none',
                data: [50, 40, 70, 60, 30, 80, 60, 90, 120, 130, 140, 150],
                lineStyle: {
                    normal: {
                        color: '#ff6774'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#ff6774'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }])
                    }
                },
            }
        ]
    };

    myChart2.setOption(option);
    $(window).resize(function () {
        myChart2.resize();
    })

})

// 设备近12月平均变化趋势
$(function () {
    var myChart3 = echarts.init(document.getElementById('linecharts3'));
    var option = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        // '{a} <br/>{b} : {c}'
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4,
            padding:10,
            
            textStyle:{
                color:"#000"
            },   
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
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
            },
            extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)' ,
        },
        color:["#63d393","#fad240","#f86a6a"],
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'100-80分',icon:'rect'},
                {name:'60-80分',icon:'rect'},
                {name:'0-60分',icon:'rect'},
            ]
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06']
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series: [
           
            {
                name: '100-80分',
                type: 'line',
                smooth: true,
                data: [25, 60, 20, 80, 23, 42, 30, 120, 50, 80, 10, 50],
                lineStyle: {
                    normal: {
                        color: '#63d393'
                    }
                }
            },
            {
                name: '60-80分',
                type: 'line',
                smooth: true,
                data: [50, 40, 70, 60, 120, 80, 60, 90, 70, 60, 120, 50],
                lineStyle: {
                    normal: {
                        color: '#fad240'
                    }
                }
            },
            {
                name: '0-60分',
                type: 'line',
                smooth: true,
                data: [30, 20, 50, 80, 120, 80, 20, 150, 120, 130, 50, 30],
                lineStyle: {
                    normal: {
                        color: '#f86a6a'
                    }
                }
            }
        ]
    };

    myChart3.setOption(option);
    $(window).resize(function () {
        myChart3.resize();
    })

})


// 设备得分

$(function () {
    var myChart4 = echarts.init(document.getElementById('linecharts4'));
    var option = {
        tooltip: {
           show:false
        },
        legend: {
            show: false,
        },
        color:["#378efe"],
        xAxis: {
            type: 'category',
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 12
            },
            data: ['最低分','平均分','本设备分','最高分']
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series: [
           
            {
                name: '设备得分',
                type: 'line',
                smooth: true,
                data: [20,58,83,120],
                lineStyle: {
                    normal: {
                        color: '#378efe'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#378efe'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }])
                    }
                },
                itemStyle:{
                    normal:{
                        color:'#555',
                        
                        label:{
                            show:true,
                            fontSize:24,
                            position:'top',
                            offset:[0,-20],
                            textStyle:{
                                color:'#555',
                        
                            },
                            formatter: '{c|{c}}\n{b|{b}}',
                            rich: {
                                a:{
                                    fontSize:24,
                                    color:'#555',
                                    textAlign:'center'
                                },
                                b:{
                                    fontSize:12,
                                    color:'#555'
                                }
                            }
                        }
                    }
                }
            },
            {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-100%',
                symbolPosition: 'end',
                symbolOffset: [0, '-120%'],
                data: [{
                    value: 20,
                    symbol: 'image://../../imgs/charts/blue-triangular.png',
                    symbolSize: [14, 12]
                }, {
                    value: 58,
                    symbol: 'image://../../imgs/charts/blue-triangular.png',
                    symbolSize: [14, 12]
                }, {
                    value: 83,
                    symbol: 'image://../../imgs/charts/red-triangular.png',
                    symbolSize: [27, 22]
                }, {
                    value: 120,
                    symbol: 'image://../../imgs/charts/blue-triangular.png',
                    symbolSize: [14, 12]
                }]
            }
        ]
    };

    myChart4.setOption(option);
    $(window).resize(function () {
        myChart4.resize();
    })

})

