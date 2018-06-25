
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
            icon:"circle",
            orient: 'vertical',
            top: 'middle',
            right: '10%',
            itemWidth:8,
            itemHeight:8,
            
            // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            formatter: function(name) {
                var totle = (function () {
                    var totle = 0;
                    for(var i= 0;i<data.length;i++) {
                        totle+=data[i].value;

                    }

                    return totle;
                })()
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
       
        series: [{
            name: '坠砣监测占比',
            type: 'pie',
            radius: ['42%', '70%'],
            avoidLabelOverlap: false,
            center: ['30%', '40%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
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

$(function () {
     // 告警占比
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
             icon:'circle',
             orient: 'vertical',
             top: 'middle',
             right: '10%',
             itemWidth:8,
             itemHeight:8,
             // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
             formatter: function(name) {
                 var totle = (function () {
                     var totle = 0;
                     for(var i= 0;i<data.length;i++) {
                         totle+=data[i].value;
 
                     }
 
                     return totle;
                 })()
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
             name: '告警占比',
             type: 'pie',
             radius: ['30%', '70%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['30%', '40%'],
             label: {
                 normal: {
                     show: false,
                     position: 'center'
                 },
                 emphasis: {
                     show: false,
                     formatter:'{a}\n{c}',
                     textStyle: {
                         fontSize: '20'
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

//健康状态
$(function () {
    var myChart2 = echarts.init(document.getElementById('pieChart2'));
     var colors = ['#3494fd', '#ff6673', '#f8c138'];
     var data = [{
             value: 335,
             name: '健康',
             itemStyle:{
                 normal:{
                     color:colors[0]
                 }
             }
         },
         {
             value: 310,
             name: '亚健康',
             itemStyle:{
                 normal:{
                     color:colors[1]
                 }
             }
         },
         {
             value: 234,
             name: '病态',
             itemStyle:{
                 normal:{
                     color:colors[2]
                 }
             }
         }
     ]
     var option2 = {
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             icon:'circle',
             orient: 'vertical',
             top: 'middle',
             right: '10%',
             itemWidth:8,
             itemHeight:8,
             formatter: function(name) {
                 var totle = (function () {
                     var totle = 0;
                     for(var i= 0;i<data.length;i++) {
                         totle+=data[i].value;
 
                     }
 
                     return totle;
                 })()
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
             name: '告警占比',
             type: 'pie',
             radius: ['40%', '70%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['30%', '50%'],
             roseType : 'radius',
             label: {
                 normal: {
                     show: false,
                     position: 'center'
                 },
                 emphasis: {
                     show: false,
                     formatter:'{a}\n{c}',
                     textStyle: {
                         fontSize: '20'
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
     myChart2.setOption(option2);
})
// 维修状态占比
$(function () {
    var myChart3 = echarts.init(document.getElementById('pieChart3'));
     var colors = ['#3494fd', '#ff6673', '#f8c138'];
     function setborder(colors){
         var label={
             normal: {
                 formatter: '  {b|{b}}{c}\n{hr|}\n',
                 borderWidth: 1,
                 borderRadius: 4,
                 rich: {
                     a: {
                         lineHeight: 22,
                         align: 'center'
                     },
                     hr: {
                         borderColor:colors,
                         width: '100%',
                         borderWidth: 0.5,
                         height: 0
                     },
                     b: {
                         fontSize: 12,
                         lineHeight: 14
                     }
                 }
             }
         }
         return label;
     }
     var data = [{
             value: 335,
             name: '状态秀',
             label:setborder(colors[0]),
             itemStyle:{
                 normal:{
                     color:colors[0]
                 }   
             }
         },
         {
             value: 310,
             name: '故障修',
             label:setborder(colors[1]),
             itemStyle:{
                 normal:{
                     color:colors[1]
                 }
             }
         },
         {
             value: 234,
             name: '计划修',
             label:setborder(colors[2]),
             itemStyle:{
                 normal:{
                     color:colors[2]
                 }
             }
         }
     ]
     var option3 = {
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             show:false,
             icon:'circle',
             orient: 'vertical',
             top: 'middle',
             right: '10%',
             itemWidth:8,
             itemHeight:8,
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
             name: '维修状态占比',
             type: 'pie',
             radius: ['40%', '60%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['50%', '50%'],
             roseType : 'radius',
             data: data
         }]
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart3.setOption(option3);
 })