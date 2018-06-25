$(function(){
    var myChart= echarts.init(document.getElementById('barcharts'));
    var seriesLabel = {
        normal: {
            show: true,
            textBorderColor: '#333',
            textBorderWidth: 2
        }
    }
    
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['A值', 'B值']
        },
        grid: {
            left:50,
            top:20,
            bottom:10,
            right:'30%'
        },
        
        xAxis: [{
            type: 'value',
          
        }

    ],
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
           
        },
        data: ['会', '不会', '看情况']
    },
        series: [
            {
                type: 'bar',
                data: [200, 200, 200],
                label: seriesLabel,
                silent: true,
                barWidth: 15,
                barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#ddd'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        fontSize: 16,
                        color: '#000',
                        offset: [40,0],
                        formatter: function(params){
                            return 200
                        }
                    }
                },
            },
            {
                type: 'bar',
                data: [200, 200, 200],
                label: seriesLabel,
                silent: true,
                barWidth: 15,
                // barGap: '-100%',
                itemStyle: {
                    normal: {
                        color: '#ddd'
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        fontSize: 16,
                        color: '#000',
                        offset: [40,0],
                        formatter: function(params){
                            return 200
                        }
                    }
                },
            },
            {
                name: 'A值',
                type: 'bar',
                barWidth: 15,
                zlevel: 1,
                label: seriesLabel,
                barGap: '-100%',
                data: [150, 105, 110]
            },
            
            {
                name: 'B值',
                type: 'bar',
                zlevel: 1,
                barWidth: 15,
                label: seriesLabel,
                data: [150, 105, 110]
            },
           
            
        ]
    };
    myChart.setOption(option);
})