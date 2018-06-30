$(function () {
    var myChart= echarts.init(document.getElementById('linecharts'));
    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20']
        },
        yAxis: {
            type: 'category',
            name:'A值',
            data:['0cm','10cm','20cm','30cm','40cm','50cm','60cm']
        },
         grid:{
             top:'15%',
             left:'2%',
             right:'4%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: ['20cm','40cm','30cm','20cm','40cm','60cm','10cm','50cm','20cm','20cm','50cm','10cm','30cm','50cm','30cm','50cm','10cm','30cm','40cm','60cm'],
            type: 'line',
            smooth: true,
            itemStyle:{
                color:'#3494fd'
            },
            markLine : {
                data : [
                    {type : 'max', name : '最大值',itemStyle:{normal:{color:'#7bd769'}}},
                    {type : 'min', name : '最小值',itemStyle:{normal:{color:'#ffdb31'}}},
                    {type : 'average', name : '平均值',itemStyle:{normal:{color:'#ff6673'}}}
                ]
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3494fd'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
        }]
    };
myChart.setOption(option);
})

$(function () {
    var myChart1= echarts.init(document.getElementById('linecharts1'));
    option1 = {
        
        xAxis: {
            type: 'category',
            name:'时间',
            data: ['17/06','17/07','17/08','17/09','17/10','17/11','17/12','18/01','18/02','18/03','18/04','18/05','18/06',]
        },
        yAxis: [{
            name:'评分',
            type: 'value',
            min:0,
            max:120
        }  
    ],  
         grid:{
             top:'15%',
             left:'2%',
             right:'4%',
             bottom:0,
             containLabel:true
         },
         tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        series: [
            {
            data: [110,108,105,100,98,95,90,88,86,85,80,78,75],
            type: 'line',
            name:"A值",
            symbol:0,
            symbolSize:0,
            smooth: true,
            itemStyle:{
                color:'#3494fd'
            },
            
        },
        {
            data: [50,50,50,50,50,50,50,50,50,50,50,50,50],
            type: 'line',
            name:"B值",
            symbol:0,
            symbolSize:0,
            smooth: true,
            itemStyle:{
                color:'#ff6673'
            },
            z:5,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fef1f1'
                    }, {
                        offset: 1,
                        color: '#fff'
                    }])
                }
            },
        },
        {
            data: [80,80,80,80,80,80,80,80,80,80,80,80,80],
            type: 'line',
            name:"B值",
            symbol:0,
            symbolSize:0,
            smooth: true,
            itemStyle:{
                color:'#3494fd'
            },
            z:2,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fef9eb'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
        },
        {
            data: [100,100,100,100,100,100,100,100,100,100,100,100,100],
            type: 'line',
            name:"B值",
            symbol:0,
            symbolSize:0,
            smooth: true,
            itemStyle:{
                color:'#00dc94'
            },
            z:1,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f8fffb'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
        }]
    }
myChart1.setOption(option1);
})
