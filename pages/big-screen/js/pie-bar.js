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
            margin: 4,
            fontSize: 16
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
                        color: "#fd755b"
                    }
                }
            },
            {
                value: 40,
                itemStyle: {
                    normal: {
                        color: "#fd755b"
                    }
                }
            },
            {
                value: 38,
                itemStyle: {
                    normal: {
                        color: "#fd755b"
                    }
                }
            },
            {
                value: 35,
                itemStyle: {
                    normal: {
                        color: "#fea158"
                    }
                }
            },
            {
                value: 30,
                itemStyle: {
                    normal: {
                        color: "#fea158"
                    }
                }
            },
            {
                value: 28,
                itemStyle: {
                    normal: {
                        color: "#53d3ac"
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