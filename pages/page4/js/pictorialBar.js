$(function () {
    var myChart = echarts.init(document.getElementById('pictorialbar'));
    // 颜色
    var darkBlue = '#2e8aff';
    var lightBlue = '#73b8ff';
    var red = '#f86a6a';

    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'line', 
            }
        },
        xAxis: [{
                type: 'category',
                boundaryGap: false,
                boundaryGap: 100,
                // min:-1,
                // max:4,
                // axisLine: {
                //     lineStyle: {
                //         color: '#4bbbf8',
                //         shadowColor: 'rgba(75, 211, 255, 0.5)',
                //         shadowBlur: 5
                //     }
                // },
                axisTick: {
                    show:false
                },
                axisLabel: {
                    color: '#000',
                    fontSize: 12
                },
                splitLine: {
                    show: false
                },
                gridIndex: 0,
                data: ['实际值', '要求大于', '禁止小于'],

            },
            {
                type: 'category',
                boundaryGap: false,
                // min:1,
                // max:4,
                boundaryGap: 100,
                // axisLine: {
                //     lineStyle: {
                //         color: '#4bbbf8',
                //         shadowColor: 'rgba(75, 211, 255, 0.5)',
                //         shadowBlur: 5
                //     }
                // },
                
                axisTick: {
                    interval: (index) => {
                        if (index === -1 || index === 9) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                },
                axisLabel: {
                    color: '#000',
                    fontSize: 12
                },
                splitLine: {
                    show: false
                },
                gridIndex: 1,
                data: ['实际值', '要求大于', '禁止小于'],

            }
        ],

        grid: [{
                top: '10%',
                width: '50%',
                bottom: 0,
                left: '2%',
                containLabel: true
            },
            {
                top: '10%',
                width: '50%',
                bottom: 0,
                left: '50%',
                containLabel: true
            }
        ],
        yAxis: [{
            max: 120,
            min: 0,
            // axisLine: {
            //     lineStyle: {
            //         color: '#4bbbf8',
            //         shadowColor: 'rgba(75, 211, 255, 0.5)',
            //         shadowBlur: 5
            //     }
            // },
            axisLabel: {
                color: '#000',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            gridIndex: 0,
        },
        {
            max: 120,
            min: 0,
            axisLine: {
                lineStyle: {
                    color: 'transparent',
                    
                }
            },
            axisTick:{
                show:false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            gridIndex: 1,
        }
    ],
        series: [{
                name: '数量',
                type: 'pictorialBar',
                // barCategoryGap: '-20%',
                symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
                xAxisIndex: 0,
                yAxisIndex: 0,
                label: {
                    show: true,
                    position: 'top',
                    color: '#1798ff',
                    fontSize: 14
                },
                
                itemStyle: {
                    normal: {
                        opacity: 0.8,
                        color: function (params) {
                            console.log(params)
                            if (params.dataIndex == 0) {
                                return darkBlue
                            } else if (params.dataIndex == 1) {
                                return lightBlue
                            } else if (params.dataIndex == 2) {
                                return red
                            }
                            // return params.dataIndex % 2 ? darkBlue : lightBlue;
                        }
                    },
                    
                   
                },
                data: [120, 40, 10]
            },
            {
                name: '数量',
                type: 'pictorialBar',
                // barCategoryGap: '20%',
                symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
                xAxisIndex: 1,
                yAxisIndex: 1,
                label: {
                    show: true,
                    position: 'top',
                    color: '#1798ff',
                    fontSize: 14
                },
                itemStyle: {

                    normal: {
                        opacity: 0.8,
                        color: function (params) {
                            console.log(params)
                            if (params.dataIndex == 0) {
                                return darkBlue
                            } else if (params.dataIndex == 1) {
                                return lightBlue
                            } else if (params.dataIndex == 2) {
                                return red
                            }
                            // return params.dataIndex % 2 ? darkBlue : lightBlue;
                        }
                    },
                    
                },
                data: [120, 40, 10]
            }

        ]
    };

    myChart.setOption(option);
})