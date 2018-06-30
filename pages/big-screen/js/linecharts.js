$(function () {
    var myChart= echarts.init(document.getElementById('linecharts2'));
    option1 = {
        xAxis: {
            type: 'category',
            data:['01/17','02/17','03/17','04/17','05/17'],
        },
        yAxis: {
            type: 'value',
            name:'(亿)',
            min:0,
            max:240,
            splitLine:{
                lineStyle:{
                    type:'dashed'
                }    
            }   
        },
         grid:{
             top:'15%',
             left:'2%',
             right:'%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: ['90','30','120','40','60'],
            type: 'line',
            smooth: true,
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