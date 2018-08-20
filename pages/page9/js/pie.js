$(function () {
    var myChart6 = echarts.init(document.getElementById('pieChart6'));
   
    var rich = {
        exemptname: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0]
        },
        examptdata: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0],
            fontWeight: 'bold'
        },
        exemname: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0]
        },
        examdata: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0],
            fontWeight: 'bold'
        },
        rectblue: {
            width: 14,
            height: 14,
            borderRadius: 3,
            backgroundColor: "#ffce22",
        },
        rectred: {
            width: 14,
            height: 14,
            borderRadius: 3,
            backgroundColor: '#ffce22'
        },
        space: {
            padding: [0, 10, 0, 0]
        },
        leftNum: {
            color: '#328cfe',
            fontSize: 18,
        },
        rightNum: {
            color: '#ffa500',
            fontSize: 18
        }
    }

    var scale = 1;
    /*---------------------颜色配置----------------------------*/

    var option6 = {
        title: [{
            text: '亚健康',
            x: 'center',
            y: 'bottom',
            textStyle: {
                textAlign: 'center',
                fontSize: 14 * scale,
            },
        }],
        series: [{

                type: 'pie',
                radius: [0, '30%'],
                radius: ['20%', '30%'],
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                data: [{
                        value: 80,
                        name: '',
                        itemStyle: {
                            color: '#328cfe'
                        },
                        label: {
                            normal: {
                                formatter: '{leftNum|{d}%}\n\n已列入\n维修计划',
                                rich: rich
                            }
                        }
                    },
                    {
                        value: 20,
                        name: '',
                        itemStyle: {
                            color: 'transparent'
                        }
                    }
                ]
            },
            {

                type: 'pie',
                radius: ['30%', '40%'],
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                data: [{
                        value: 80,
                        name: '',
                        itemStyle: {
                            color: 'transparent'
                        }
                    },
                    {
                        value: 20,
                        name: '',
                        itemStyle: {
                            color: 'orange'
                        },
                        label: {
                            normal: {
                                formatter: '{rightNum|{d}%}\n\n未列入\n维修计划',
                                rich: rich
                            }
                        },
                    }

                ]
            }
        ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart6.setOption(option6);
})

$(function () {
    var myChart7 = echarts.init(document.getElementById('pieChart7'));
   
    var rich = {
        exemptname: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0]
        },
        examptdata: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0],
            fontWeight: 'bold'
        },
        exemname: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0]
        },
        examdata: {
            color: '#000',
            fontSize: 12 * scale,
            padding: [0, 0],
            fontWeight: 'bold'
        },
        rectblue: {
            width: 14,
            height: 14,
            borderRadius: 3,
            backgroundColor: "#ffce22",
        },
        rectred: {
            width: 14,
            height: 14,
            borderRadius: 3,
            backgroundColor: '#ffce22'
        },
        space: {
            padding: [0, 10, 0, 0]
        },
        leftNum: {
            color: '#328cfe',
            fontSize: 18,
        },
        rightNum: {
            color: '#ffa500',
            fontSize: 18
        }
    }

    var scale = 1;
    /*---------------------颜色配置----------------------------*/

    var option7 = {
        title: [{
            text: '亚健康',
            x: 'center',
            y: 'bottom',
            textStyle: {
                textAlign: 'center',
                fontSize: 14 * scale,
            },
        }],
        series: [{

                type: 'pie',
                radius: [0, '30%'],
                radius: ['20%', '30%'],
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                data: [{
                        value: 80,
                        name: '',
                        itemStyle: {
                            color: '#328cfe'
                        },
                        label: {
                            normal: {
                                formatter: '{leftNum|{d}%}\n\n已列入\n维修计划',
                                rich: rich
                            }
                        }
                    },
                    {
                        value: 20,
                        name: '',
                        itemStyle: {
                            color: 'transparent'
                        }
                    }
                ]
            },
            {

                type: 'pie',
                radius: ['30%', '40%'],
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                data: [{
                        value: 80,
                        name: '',
                        itemStyle: {
                            color: 'transparent'
                        }
                    },
                    {
                        value: 20,
                        name: '',
                        itemStyle: {
                            color: 'orange'
                        },
                        label: {
                            normal: {
                                formatter: '{rightNum|{d}%}\n\n未列入\n维修计划',
                                rich: rich
                            }
                        },
                    }

                ]
            }
        ]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart7.setOption(option7);
})


