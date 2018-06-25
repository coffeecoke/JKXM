$(function () {
    var myChart = echarts.init(document.getElementById('pieChart'));
     var colors = ['#397ef7', '#ffce22'];
     var data = [{
             value: 100,
             name: '开启',
             itemStyle:{
                 normal:{
                     color:colors[0]
                 }
             }
         },
         {
             value: 200,
             name: '关闭',
             itemStyle:{
                 normal:{
                     color:colors[1]
                 }
             }
         }
        
     ]
     var option = {
         
         legend: {
             icon:'circle',
             orient: 'vertical',
             top: 'middle',
             right: '30%',
             itemWidth:8,
             itemHeight:8,
             textStyle:{
                fontSize:16
             },
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
                     return name+'  '+ data[0].value+"个";
                 }else if(name === data[1].name){
                     return name+'  '+ data[1].value+"个";
                 }
             }
         },
        
         series: [{
             name: '',
             type: 'pie',
             radius: ['60%', '90%'],
             avoidLabelOverlap: false,//防止标签重叠 true
             center: ['30%', '50%'],
             roseType : 'radius',
            
             data: data
         }]
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
})