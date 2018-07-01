$(function () {
    var myChart= echarts.init(document.getElementById('bar1'));
option1 = {
    angleAxis: {
        interval: 1,
        type: 'category',
        data: ['YW-5-1',
            'YW-5-2',
            'YW-5-3',
            'YW-5-4',
            'YW-5-5',
            'YW-5-6',
            'YW-5-7',
            'YW-5-8',
            'YW-5-9',
        ],
        z: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#7fbcff",
            margin: 2,
            fontSize: 14
        },
    },
    radiusAxis: {
        min: 0,
        max: 50,
        interval: 10,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value}',
            show: true,
            padding: [0, 0, 20, 0],
            color: "#00c7ff",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        }
    },
    polar: {},
    series: [{
        type: 'bar',
        data: [
            {
                value: 45,
                
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#fe8763' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#fd755b' // 100% 处的颜色
                            }]
                        }
                    }
                }
            },
            {
                value: 40,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#fe8763' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#fd755b' // 100% 处的颜色
                            }]
                        }
                    }
                }
            },
            {
                value: 38,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#fe8763' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#fd755b' // 100% 处的颜色
                            }]
                        }
                    }
                }
            },
            {
                value: 35,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#febd61' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#ff8a50' // 100% 处的颜色
                            }]
                        }
                    }
                }
            },
            {
                value: 30,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#febd61' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#ff8a50' // 100% 处的颜色
                            }]
                        }
                    }
                }
            },
            {
                value: 28,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#48ce9c' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#53d3ab' // 100% 处的颜色
                            }]
                        }
                    }
                }
            },
            {
                value: 26,
                itemStyle: {
                    normal: {
                        color: "#53d3ac"
                    }
                }
            },
            {
                value: 20,
                itemStyle: {
                    normal: {
                        color: "#53d3ac"
                    }
                }
            },
            {
                value: 20,
                itemStyle: {
                    normal: {
                        color: "#53d3ac"
                    }
                }
            }
        ],
        coordinateSystem: 'polar',
    }],
};
myChart.setOption(option1);
})