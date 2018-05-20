$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pieChart'));
    var colors = ['#7fcd60', '#ffce22', '#ff6673', '#c3c3c3'];
    var data = [{
            value: 335,
            name: '正常',
            itemStyle:{
                normal:{
                    color:colors[0]
                }
            }
        },
        {
            value: 310,
            name: '维护',
            itemStyle:{
                normal:{
                    color:colors[1]
                }
            }
        },
        {
            value: 234,
            name: '告警',
            itemStyle:{
                normal:{
                    color:colors[2]
                }
            }
        },
        {
            value: 135,
            name: '离线',
            itemStyle:{
                normal:{
                    color:colors[3]
                }
            }
        }
      
    ]
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top: 'middle',
            right: '20%',
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            formatter: function(name) {
                var totle = (function () {
                    var totle = 0;
                    for(var i= 0;i<data.length;i++) {
                        totle+=data[i].value;

                    }

                    return totle;
                })()
                console.log(totle)
                if(name === data[0].name) {
                    return name+'  '+ Math.round((data[0].value)/totle*100)+"%";
                }else if(name === data[1].name){
                    return name+'  '+ Math.round((data[1].value)/totle*100)+"%";
                }else if(name === data[2].name) {
                    return name+'  '+ Math.round((data[2].value)/totle*100)+"%";
                }else {
                    return name+'  '+ Math.round((data[3].value)/totle*100)+"%";
                }
            }
        },
        // grid:{
        //     top:0,
        //     left:0,
        //     right:0,
        //     bottom:0,
        //     containLabel:true
        // },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            center: ['26%', '50%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
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


    var myChart1 = echarts.init(document.getElementById('pieChart1'));
    var colors = ['#a5222d', '#f03949', '#ff6673'];
    var data = [{
            value: 335,
            name: '正常',
            itemStyle:{
                normal:{
                    color:colors[0]
                }
            }
        },
        {
            value: 310,
            name: '维护',
            itemStyle:{
                normal:{
                    color:colors[1]
                }
            }
        },
        {
            value: 234,
            name: '告警',
            itemStyle:{
                normal:{
                    color:colors[2]
                }
            }
        }
    ]
    var option1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top: 'middle',
            right: '20%',
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            formatter: function(name) {
                var totle = (function () {
                    var totle = 0;
                    for(var i= 0;i<data.length;i++) {
                        totle+=data[i].value;

                    }

                    return totle;
                })()
                console.log(totle)
                if(name === data[0].name) {
                    return name+'  '+ Math.round((data[0].value)/totle*100)+"%";
                }else if(name === data[1].name){
                    return name+'  '+ Math.round((data[1].value)/totle*100)+"%";
                }else if(name === data[2].name) {
                    return name+'  '+ Math.round((data[2].value)/totle*100)+"%";
                }
            }
        },
        // grid:{
        //     top:0,
        //     left:0,
        //     right:0,
        //     bottom:0,
        //     containLabel:true
        // },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            center: ['26%', '50%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
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
    myChart1.setOption(option1);

})