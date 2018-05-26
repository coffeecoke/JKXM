
$(function(){
    var myChart1 = echarts.init(document.getElementById('scatterChart'));
    var option1 = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        // '{a} <br/>{b} : {c}'
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'2的指数',icon:'circle'},
                {name:'3的指数',icon:'circle'}
            ]
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine:{
                show:true,
                lineStyle:{
                    type:'dashed'
                }
            },
            data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月',"10月","11月","12月"]
        },
        yAxis: {
            type: 'value',
            name: 'y',
            splitLine:{
                show:true,
                lineStyle:{
                    type:'dashed'
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
                name: '3的指数',
                type: 'line',
                data: [20,23, 15, 27, 21, 30, 25, 50, 40,70,50,40],
                symbol:'none',
                lineStyle:{
                    normal:{
                        color:'#f8c538'
                    }
                }
            },
            {
                name: '2的指数',
                type: 'line',
                symbol:'none',
                data: [25, 30, 20, 38, 23, 42, 30, 60, 50,80,120,140],
                lineStyle:{
                    normal:{
                        color:'#5b85f3'
                    }
                }
            },
            {
                name: '1/2的指数',
                type: 'line',
                symbol:'none',
                data: [50,40,70,60,90,80,100,90,120,130,140,150],
                lineStyle:{
                    normal:{
                        color:'#fd582e'
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


$(function(){
    var myChart = echarts.init(document.getElementById('lineChart'));
    var option = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        tooltip : {
            trigger: 'axis',
            // formatter: '{a} <br/>{b} : {c}',
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'2的指数',icon:'circle'},
                {name:'3的指数',icon:'circle'}
            ]
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine:{
                show:true,
                lineStyle:{
                    type:'dashed'
                }
            },
            data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: 'y',
            splitLine:{
                show:true,
                lineStyle:{
                    type:'dashed'
                }
            },
        },
        series: [
            {
                name: '3的指数',
                type: 'line',
                symbol:'none',
                data: [50,55, 60, 65, 70, 80],
                lineStyle:{
                    normal:{
                        color:'#f8c538'
                    }
                }
            },
            {
                name: '2的指数',
                type: 'line',
                symbol:'none',
                data: [30, 35, 40, 45, 48, 50],
                lineStyle:{
                    normal:{
                        color:'#5b85f3'
                    }
                }
            },
            {
                name: '1/2的指数',
                type: 'line',
                symbol:'none',
                data: [15,20,25,30,40,40,42],
                lineStyle:{
                    normal:{
                        color:'#fb582e'
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
$(function(){
    var Chart1 = echarts.init(document.getElementById('chart1'));
var option1 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {             
        data: ['WY-1-1-5', ' WY-1-1-5', ' WY-1-1-5', 'WY-1-1-5', 'WY-1-1-5', 'WY-1-1-5'],
        splitLine:{
            show:false
        }, 
        axisLabel: {
            textStyle: {
                color: '#c5c5c5'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: 'y',
        splitLine:{
            show:true,
            lineStyle:{
                type:'dashed'
            }
        }
    },
    color: ['#3494fd'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '-130%',
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
        barGap: '-100%',
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