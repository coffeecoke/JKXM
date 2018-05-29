$(function () {
    var myChart1 = echarts.init(document.getElementById('scatterChart'));
    var option1 = {
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
            formatter:function(prames){
                var datas=prames[0].data
                var datas1=prames[1].data
                var datas2=prames[2].data
                return '<div>三月增长趋势</div>'+
                '<div style="color:#b3b4b4">最高位移量:<span>'+datas+'</span></div>'+
                '<div style="color:#b3b4b4">最低位移量:<span>'+datas1+'</span></div>'+
                '<div style="color:#b3b4b4">平均位移量<span>'+datas2+'</span></div>'
            },
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
        color:["#5b85f3","#f8c538","#fd582e"],
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'最低位移量',icon:'circle'},
                {name:'最高位移量',icon:'circle'},
                {name:'平均位移量',icon:'circle'}
            ]
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', "10月", "11月", "12月"]
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
                name: '最低位移量',
                type: 'line',
                data: [20, 23, 15, 27, 21, 30, 25, 50, 40, 70, 50, 40],
                symbol: 'none',
                lineStyle: {
                    normal: {
                        color: '#f8c538'
                    }
                }
            },
            {
                name: '最高位移量',
                type: 'line',
                symbol: 'none',
                data: [25, 30, 20, 38, 23, 42, 30, 60, 50, 80, 120, 140],
                lineStyle: {
                    normal: {
                        color: '#5b85f3'
                    }
                }
            },
            {
                name: '平均位移量',
                type: 'line',
                symbol: 'none',
                data: [50, 40, 70, 60, 90, 80, 100, 90, 120, 130, 140, 150],
                lineStyle: {
                    normal: {
                        color: '#fd582e'
                    }
                }
            }
        ]
    };

    myChart1.setOption(option1);
    $(window).resize(function () {
        myChart1.resize();
    })

})


$(function () {
    var myChart = echarts.init(document.getElementById('lineChart'));
    var option = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4, 
            padding:10,
            formatter:function(prames){
                console.log(prames)
                var datas=prames[0].data
                var datas1=prames[1].data
                var datas2=prames[2].data
                return '<div>桥梁编号：wy-1-1-5</div>'+
                '<div style="color:#b3b4b4">偏移量:<span>'+datas+'</span></div>'
            },
            textStyle:{
                color:"#000"
            },   
            // formatter: '{a} <br/>{b} : {c}',
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'line',       // 默认为直线，可选为：'line' | 'shadow'
                backgroundColor:'rgba(239,246,255,0,8)',
                
                lineStyle:{
                    width:100,
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
        color:["#5b85f3","#f8c538","#fd582e"],
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'最低位移量',icon:'circle'},
                {name:'最高位移量',icon:'circle'},
                {name:'平均位移量',icon:'circle'}
            ]
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ['19-20', '20-21', '22-23', '24-25', '25-26', '27-28','29-30']
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: '位移mm',
            splitLine:{
                show:true,
                lineStyle:{
                    type:'dashed'
                }
            },
        },
        series: [
            {
                name: '最低位移量',
                type: 'line',
                symbol: 'none',
                data: [50, 55, 60, 65, 70, 80,78],
                lineStyle: {
                    normal: {
                        color: '#f8c538'
                    }
                }
            },
            {
                name: '最高位移量',
                type: 'line',
                symbol: 'none',
                data: [30, 35, 40, 45, 48, 50,52],
                lineStyle: {
                    normal: {
                        color: '#5b85f3'
                    }
                }
            },
            {
                name: '平均位移量',
                type: 'line',
                symbol: 'none',
                data: [15, 20, 25, 30, 40, 40, 42],
                lineStyle: {
                    normal: {
                        color: '#fb582e'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    })

})
$(function () {
    var Chart1 = echarts.init(document.getElementById('chart1'));
    var option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4,
            padding:10,
            textStyle:{
                color:"#000"
            }, 
            formatter: function (params) {
                return "桥梁编号" + ': ' + params[0].name+"<br/>"+
                        "位移量"+":"+params[0].data
            },
            extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)' ,            
        },
        xAxis: {
            data: ['WY-1-1-5', ' WY-1-1-5', ' WY-1-1-5', 'WY-1-1-5', 'WY-1-1-5', 'WY-1-1-5'],
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#c5c5c5'
                }
            }
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
        color: ['#3494fd'],
        grid: {
            left: '0',
            right: '0',
            bottom: '0',
            containLabel: true
        },
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-40%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [120, 60, 25, 18, 12, 9],
            z: 10
        }, {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-120%',
            symbolPosition: 'end',
            symbolSize: 0,
            symbolOffset: [0, '-120%'],
            data: [{
                value: 120,

            }, {
                value: 60,

            }, {
                value: 25,

            }, {
                value: 18,

            }, {
                value: 12,

            }, {
                value: 9,

            }]
        }]
    };
    Chart1.setOption(option1);
})