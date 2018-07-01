$(function () {
    var myChart6 = echarts.init(document.getElementById('pieChart6'));
/*---------------------数据----------------------------*/
/*---------------------数据----------------------------*/
var exemptData = [{
    value: 60,
    name: '已列入维修计划'
}, {
    value: 20,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var examNum = [{
    value: 48,
    name: '未列入维修计划',
}, {
    value: 58,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var scale = 1;
/*---------------------颜色配置----------------------------*/
var exemptcolor = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0.2,
        color: '#328cfe' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#328cfe' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];

var examNumcolor = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0.3,
        color: '#ffce22' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#ffce22' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];
/*---------------------富文本----------------------------*/
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
        borderRadius:3,
        backgroundColor: "#ffce22",
    },
    rectred: {
        width:14,
        height:14,
        borderRadius:3,
        backgroundColor:'#ffce22'
    },
    space: {
        padding: [0, 10, 0, 0]
    }
}


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
    series: [
        //内圈圆环
        {
            name: '内边框',
            type: 'pie',
            startAngle: 260,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['10%', '10%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 10,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#ffce22'
                    }
                }
            }, {
                value: 2,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: 'none',
                        color: 'transparent'
                    }
                }
            }]
        },
        //免考人数圆环
        {
            name: '免考人数',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            startAngle: 100,
            center: ['50%', '55%'],
            radius: ['20%', '30%'],
            color: exemptcolor,
            label: {
                normal: {
                    formatter:'未列入\n维修计划',
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 40,
                    length2: 20,
                    lineStyle: {
                        color: '#328cfe',
                    }
                }
            },
            data: exemptData,
        },
        //正常考试人数圆环
        {
            name: '正常考试',
            type: 'pie',
            startAngle: 320,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['35%', '25%'],
            color: examNumcolor,
            label: {
                normal: {
                    formatter:'已列入\n维修计划',
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        color: '#ffce22',
                    }
                }
            },
            data: examNum,
        },
        //内圈圆环
        {
            name: '外边框',
            type: 'pie',
            // startAngle: 260,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['45%', '45%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#328cfe'
                    }
                }
            }, {
                value: 2,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: 'none',
                        color: 'transparent'
                    }
                }
            }]
        },
    ]
};
       // 使用刚指定的配置项和数据显示图表。
    myChart6.setOption(option6);
})



$(function () {
    var myChart7 = echarts.init(document.getElementById('pieChart7'));
/*---------------------数据----------------------------*/
/*---------------------数据----------------------------*/
var exemptData = [{
    value: 60,
    name: '已列入维修计划'
}, {
    value: 20,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var examNum = [{
    value: 48,
    name: '未列入维修计划',
}, {
    value: 58,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var scale = 1;
/*---------------------颜色配置----------------------------*/
var exemptcolor = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0.2,
        color: '#328cfe' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#328cfe' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];

var examNumcolor = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0.3,
        color: '#ffce22' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#ffce22' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];
/*---------------------富文本----------------------------*/
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
        borderRadius:3,
        backgroundColor: "#ffce22",
    },
    rectred: {
        width:14,
        height:14,
        borderRadius:3,
        backgroundColor:'#ffce22'
    },
    space: {
        padding: [0, 10, 0, 0]
    }
}


var option7 = {
    title: [{
        text: '病态',
        x: 'center',
        y: 'bottom',
        textStyle: {
            textAlign: 'center',
            fontSize: 14 * scale,
        },
    }],
    series: [
        //内圈圆环
        {
            name: '内边框',
            type: 'pie',
            startAngle: 260,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['10%', '10%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 10,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#ff6673'
                    }
                }
            }, {
                value: 2,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: 'none',
                        color: 'transparent'
                    }
                }
            }]
        },
        //免考人数圆环
        {
            name: '免考人数',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            startAngle: 100,
            center: ['50%', '55%'],
            radius: ['20%', '30%'],
            color: exemptcolor,
            label: {
                normal: {
                    formatter: '未列入\n维修计划',
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 40,
                    length2: 20,
                    lineStyle: {
                        color: '#328cfe',
                    }
                }
            },
            data: exemptData,
        },
        //正常考试人数圆环
        {
            name: '正常考试',
            type: 'pie',
            startAngle: 320,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['35%', '25%'],
            color: examNumcolor,
            label: {
                normal: {
                    formatter: '已列入\n维修计划',
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        color: '#ffce22',
                    }
                }
            },
            data: examNum,
        },
        //内圈圆环
        {
            name: '外边框',
            type: 'pie',
            // startAngle: 260,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['45%', '45%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 9,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#328cfe'
                    }
                }
            }, {
                value: 2,
                name: '',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: 'none',
                        color: 'transparent'
                    }
                }
            }]
        },
    ]
};
       // 使用刚指定的配置项和数据显示图表。
    myChart7.setOption(option7);
})