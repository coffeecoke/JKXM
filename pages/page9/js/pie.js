$(function () {
    var myChart6 = echarts.init(document.getElementById('pieChart6'));
/*---------------------数据----------------------------*/
var exemptData = [{
    value: 18,
    name: '免考人数'
}, {
    value: 70,
    name: '',
    labelLine: {
        normal: {
            show: false
        }
    }
}];
var examNum = [{
    value: 48,
    name: '正常考试'
}, {
    value: 28,
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
        color: '#ffce22' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#ffce22' // 100% 处的颜色
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
        color: '#328cfe' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#328cfe' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}, 'none'];
/*---------------------富文本----------------------------*/
var rich = {
    exemptname: {
        color: '#115b70',
        fontSize: 14 * scale,
        padding: [0, 0]
    },
    examptdata: {
        color: '#115b70',
        fontSize: 30 * scale,
        padding: [0, 0],
        fontWeight: 'bold'
    },
    exemname: {
        color: '#115b70',
        fontSize: 14 * scale,
        padding: [0, 0]
    },
    examdata: {
        color: '#3fdaff',
        fontSize: 30 * scale,
        padding: [0, 0],
        fontWeight: 'bold'
    },
    rectblue: {
        width: 14,
        height: 14,
        borderRadius:3,
        backgroundColor: "#3fdaff",
    },
    rectred: {
        width:14,
        height:14,
        borderRadius:3,
        backgroundColor:'#eb297d'
    },
    space: {
        padding: [0, 10, 0, 0]
    }
}


var option6 = {
    backgroundColor: '#031f2d',
    title: [{
        text: '整体考试情况',
        x: 'center',
        y: 'top',
        textStyle: {
            color: '#fff',
            textAlign: 'center',
            fontSize: 24 * scale,
            fontWeight: 'bold'
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
            radius: ['20%', '20%'],
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
                        borderColor: 'none'
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
            startAngle: 360,
            center: ['50%', '55%'],
            radius: ['35%', '25%'],
            color: exemptcolor,
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.dataIndex === 0) {
                            return '{examptdata|' + params.value + '}\n{exemptname|' + params.name + '}';
                        }
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 90,
                    length2: 20,
                    lineStyle: {
                        color: '#ffce22',
                    }
                }
            },
            data: exemptData,
        },
        //正常考试人数圆环
        {
            name: '正常考试',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['50%', '40%'],
            color: examNumcolor,
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.dataIndex === 0) {
                            return '{examdata|' + params.value + '}\n{exemname|' + params.name + '}';
                        }
                    },
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    length: 70,
                    length2: 20,
                    lineStyle: {
                        color: '#328cfe',
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
            radius: ['60%', '60%'],
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
                        borderColor: 'none'
                    }
                }
            }]
        },
    ]
};
       // 使用刚指定的配置项和数据显示图表。
    myChart6.setOption(option6);
})