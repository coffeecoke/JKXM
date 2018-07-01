
    
// 设备检测
$(function () {
    var myChart = echarts.init(document.getElementById('pieChart1'));
     var colors = ['#417af6', '#7fcd60', '#ffce22','#ff6673'];
     function setborder(colors){
         var label={
             normal: {
                 formatter: '  {b|{b}}\n{d}%\n{hr|}\n',
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
             value: 815,
             name: '设备总数',
             label:setborder(colors[0]),
             itemStyle:{
                 normal:{
                     color:colors[0]
                 }   
             }
         },
         {
             value: 655,
             name: '健康设备',
             label:setborder(colors[1]),
             itemStyle:{
                 normal:{
                     color:colors[1]
                 }
             }
         },
         {
             value: 349,
             name: '亚健康设备',
             label:setborder(colors[2]),
             itemStyle:{
                 normal:{
                     color:colors[2]
                 }
             }
         },
         {
            value: 110,
            name: '病态设备',
            label:setborder(colors[3]),
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
             show:true,
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
                    return name+'  '+ Math.round((data[0].value));
                }else if(name === data[1].name){
                    return name+'  '+ Math.round((data[1].value));
                }else if(name === data[2].name) {
                    return name+'  '+ Math.round((data[2].value));
                }else if(name === data[3].name){
                    return name+'  '+ Math.round((data[3].value));
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
             radius: ['0', '60%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['30%', '50%'],
             data: data
         }]
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
 })

 //各类设备健康状态分布
 //坠陀
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
             bottom: 0,
             left: 'center',
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
        
         series: [{
             name: '',
             type: 'pie',
             radius: ['60%', '70%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['50%', '40%'],
            //  roseType : 'radius',
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
//桥梁
$(function () {
    var myChart3 = echarts.init(document.getElementById('pieChart3'));
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
     var option3 = {
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             icon:'circle',
             orient: 'vertical',
             bottom: 0,
             left: 'center',
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
        
         series: [{
             name: '',
             type: 'pie',
             radius: ['60%', '70%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['50%', '40%'],
            //  roseType : 'radius',
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
     myChart3.setOption(option3);
})
//钢轨
$(function () {
    var myChart4 = echarts.init(document.getElementById('pieChart4'));
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
     var option4 = {
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             icon:'circle',
             orient: 'vertical',
             bottom: 0,
             left: 'center',
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
        
         series: [{
             name: '',
             type: 'pie',
             radius: ['60%', '70%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['50%', '40%'],
            //  roseType : 'radius',
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
     myChart4.setOption(option4);
})
//声屏蔽
$(function () {
    var myChart5 = echarts.init(document.getElementById('pieChart5'));
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
     var option5 = {
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             icon:'circle',
             orient: 'vertical',
             bottom: 0,
             left: 'center',
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
        
         series: [{
             name: '',
             type: 'pie',
             radius: ['60%', '70%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['50%', '40%'],
            //  roseType : 'radius',
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
     myChart5.setOption(option5);
})

