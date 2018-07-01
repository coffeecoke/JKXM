$(function () {
    $('#roll').rollNoInterval().top();
    // $('#chart-mouths').rollSlide({
    //     orientation: 'top1',
    //     num: 1,
    //     v: 1000,
    //     space: 20000,
    //     isRoll: true
    // });
})

$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieChartMonth12'));
    option = {
        
        tooltip: {
            show:false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
            name: '一月',
            type: 'pie',
            radius: '70%',
            center: ['25%', '50%'],
            
            data: [{
                value: 25,
                itemStyle:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#60d9bd' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#47cc97' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor:'#4e8ffa',
                    shadowBlur:20
                }
                
            }, {
                value: 45,
                itemStyle:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#fe8864' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#fd7059' // 100% 处的颜色
                        }],
                        globalCoord: false ,// 缺省为 false
                        
                    },
                    shadowColor:'#4e8ffa',
                    shadowBlur:20
                }
                
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
               
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },


        {
            name: '库存情况',
            type: 'pie',
            radius: '70%',
            center: ['75%', '50%'],
            itemStyle:{
                shadowColor:'#ccd1dc',
                shadowBlur:6

            },
            clockwise: false,
            data: [{
                value: 25,
                itemStyle:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#60d9bd' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#47cc97' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor:'#4e8ffa',
                    shadowBlur:20
                }
                
            }, {
                value: 45,
                itemStyle:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#feaa5b' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#ff8e52' // 100% 处的颜色
                        }],
                        globalCoord: false ,// 缺省为 false
                        
                    },
                    shadowColor:'#4e8ffa',
                    shadowBlur:20
                }
                
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
        color: [
            '#5cd7b8',
            '#fe8562'
        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})


$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieChartMonth34'));
    option = {
       
        tooltip: {
            show:false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
            name: '库存情况',
            type: 'pie',
            radius: '80%',
            center: ['25%', '50%'],
            itemStyle:{
                shadowColor:'#ccd1dc',
                shadowBlur:6

            },
            clockwise: false,
            data: [{
                value: 25,
            }, {
                value: 45,
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },


        {
            name: '库存情况',
            type: 'pie',
            radius: '80%',
            center: ['75%', '50%'],
            itemStyle:{
                shadowColor:'#ccd1dc',
                shadowBlur:6

            },
            clockwise: false,
            data: [{
                value: 25,
            }, {
                value: 45,
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
              
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
        color: [
            '#5cd7b8',
            '#fe8562'
        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})

$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieChartMonth56'));
    option = {
       
        tooltip: {
            show:false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
            name: '库存情况',
            type: 'pie',
            radius: '80%',
            center: ['25%', '50%'],
            itemStyle:{
                shadowColor:'#ccd1dc',
                shadowBlur:6

            },
            clockwise: false,
            data: [{
                value: 25,
            }, {
                value: 45,
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },


        {
            name: '库存情况',
            type: 'pie',
            radius: '80%',
            center: ['75%', '50%'],
            itemStyle:{
                shadowColor:'#ccd1dc',
                shadowBlur:6

            },
            clockwise: false,
            data: [{
                value: 25,
            }, {
                value: 45,
            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
               
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
        color: [
            '#5cd7b8',
            '#fe8562'
        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})


