$(function () {
    var myChart= echarts.init(document.getElementById('linecharts'));
    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20']
        },
        yAxis: {
            type: 'value',
            min:0,
            max:120
        },
         grid:{
             top:'10%',
             left:'2%',
             right:'2%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: [20,80,30,90,40,120,10,70,20,90,5,120,30,50,30,70,10,120,40,90],
            type: 'line',
            smooth: true,
            itemStyle:{
                color:'#3494fd'
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