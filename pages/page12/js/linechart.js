$(function () {
    var myChart1 = echarts.init(document.getElementById('linecharts1'));
    var option = {
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
        color:["#5b85f3","#ff6774"],
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'故障数',icon:'rect'},
                {name:'预警数',icon:'rect'},
            ]
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', "2017-10", "2017-11", "2017-12"]
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
                name: '故障数',
                type: 'line',
                symbol: 'none',
                data: [25, 60, 20, 80, 23, 42, 30, 120, 50, 80, 120, 140],
                lineStyle: {
                    normal: {
                        color: '#5b85f3'
                    }
                },
                zIndex:1,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#5b85f3'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }])
                    }
                },
            },
            {
                name: '预警数',
                type: 'line',
                symbol: 'none',
                data: [50, 40, 70, 60, 30, 80, 60, 90, 120, 70, 60, 80],
                lineStyle: {
                    normal: {
                        color: '#ff6774'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#ff6774'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }])
                    }
                },
            }
        ]
    };

    myChart1.setOption(option);
    $(window).resize(function () {
        myChart1.resize();
    })

})