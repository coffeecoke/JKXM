
$(function () {
    // $('#roll').rollNoInterval().top();
})


$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieChart2'));
    option = {
        title:[
            {
                text: '一月',
                left: '25%',
                top: '85%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: '#0062ff',
                    textAlign: 'center',
                },
            },{
                text: '二月',
                left: '75%',
                top: '85%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: '#0062ff',
                    textAlign: 'center',
                },
            }
        ],
        tooltip: {
            show:false,
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
            name: '库存情况',
            type: 'pie',
            radius: '68%',
            center: ['25%', '50%'],
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
            radius: '68%',
            center: ['75%', '50%'],
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
        }
    ],
        color: [
            '#5cd7b8',
            '#fe8562'
        ],
        backgroundColor: '#fff'
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})

