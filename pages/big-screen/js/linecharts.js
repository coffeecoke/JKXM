$(function () {
    var myChart= echarts.init(document.getElementById('linecharts2'));
    option1 = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:['01/17','02/17','03/17','04/17','05/17'],
            axisLine: {
                lineStyle: {
                    color: '#5da9fb'
                 }
             },
        },
        yAxis: {
            type: 'value',
            name:'(亿)',
            min:0,
            max:240,
            splitLine:{
                lineStyle:{
                    type:'dashed',
                    color:'#6697e3'
                }    
            },
            axisLine: {
                lineStyle: {
                    color: '#5da9fb'
                 }
             },   
        },
         grid:{
             top:'15%',
             left:'2%',
             right:'5%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: ['90','30','120','40','60'],
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle:{
                color:'transparent'
            },
           
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        colorStops: [{
                            offset: 0, color: '#fe8864' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#f24899' // 100% 处的颜色
                        }]
                    }
                }
            },
        }]
    }
myChart.setOption(option1);
})