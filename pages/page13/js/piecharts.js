$(function(){
    var myChart2 = echarts.init(document.getElementById('piecharts'));
    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        },
        emphasis: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        }
    };
    
    
    var dataStyle = {
        normal: {
            formatter: '{c}%',
            position: 'center',
            show: true,
            textStyle: {
                fontSize: '30',
                fontWeight: 'normal',
                color: '#000'
            }
        }
    };
    
    
    option = {
        title: [
           {
            text: '预测准确率',
            left: '30%',
            top: '30%',
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: '#000',
                textAlign: 'center',
            },
        }, {
            text: '故障诊断准确率',
            left: '30%',
            top: '75%',
            textAlign: 'center',
            textStyle: {
                color: '#000',
                fontWeight: 'normal',
                fontSize: '16',
                textAlign: 'center',
            }
        }
    ],
    legend: {
        show:true,
        orient: 'vertical',
        left: 'left',
        data: ['预测准确率','故障诊断准确率']
    },
        grid:{
            top:"5%",
            left:0,
            right:0,
            bottom:"5%"
        },
        series: [{
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['38%', '42%'],
                center: ['30%', '30%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                z:10,
                data: [{
                        value: 97,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3494fd'
                                }, {
                                    offset: 1,
                                    color: '#3494fd'
                                }]),
                            }
                        },
                        label: dataStyle,
                    },
                     {
                        value: 3,
                        itemStyle: placeHolderStyle,
                    },
                ]
            },{
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['38%', '42%'],
                center: ['30%', '75%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                z:10,
                data: [{
                        value: 98,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ffce22'
                                }, {
                                    offset: 1,
                                    color: '#ffce22'
                                }]),
                            }
                        },
                        label: dataStyle,
                    },
                     {
                        value: 2,
                        itemStyle: placeHolderStyle,
                    },
                ]
            },
           
            //外圈的边框
            {
                // name: '总人数',
                type: 'pie',
                radius: ['40%', '41%'],
                center: ['30%', '30%'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3494fd'
                                }, {
                                    offset: 1,
                                    color: '#3494fd'
                                }]),
                            }
                        },
                    }, {
                        value: 0,
                        itemStyle: placeHolderStyle,
                    },
    
                ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['40%', '41%'],
                center: ['30%', '75%'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#ffce22'
                                }, {
                                    offset: 1,
                                    color: '#ffce22'
                                }]),
                            }
                        },
                    }, {
                        value: 0,
                        itemStyle: placeHolderStyle,
                    },
    
                ]
            },
        ]
    };
    myChart2.setOption(option);
    $(window).resize(function () {
        myChart2.resize();
    })
})