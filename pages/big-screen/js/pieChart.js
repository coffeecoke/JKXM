$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieChart1'));
    var colors = ['#ff6673', '#54faae', '#ffd91a'];
    var data = [{
            value: 335,
            name: '严重',
            itemStyle:{
                normal:{
                    color:colors[0]
                }
            }
        },
        {
            value: 310,
            name: '重要',
            itemStyle:{
                normal:{
                    color:colors[1]
                }
            }
        },
        {
            value: 234,
            name: '提示',
            itemStyle:{
                normal:{
                    color:colors[2]
                }
            }
        },
      
      
    ]
    var option = {
        
        
       
        series: [{
            name: '',
            type: 'pie',
            radius: ['42%', '70%'],
            avoidLabelOverlap: false,
            center: ['50%', '50%'],
            itemStyle:{
                shadowColor:'#ccd1dc',
                shadowBlur:6

            },
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    formatter:'680\n全部监控设备',
                    textStyle: {
                        fontSize: '14'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})