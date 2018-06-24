$(function () {
    var myChart= echarts.init(document.getElementById('piecharts'));
     var colors = ['#3d9df6', '#f8bb38'];
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
             value: 205,
             name: '无告警小时',
             label:setborder(colors[0]),
             itemStyle:{
                 normal:{
                     color:colors[0]
                 }   
             }
         },
         {
             value: 310,
             name: '告警小时',
             label:setborder(colors[1]),
             itemStyle:{
                 normal:{
                     color:colors[1]
                 }
             }
         }
     ]
     var option= {
         tooltip: {
             trigger: 'item',
             formatter: "{a} <br/>{b}: {c} ({d}%)"
         },
         legend: {
             show:false,
             icon:'circle',
             orient: 'vertical',
             top: 'middle',
             right: '20%',
             itemWidth:8,
             itemHeight:8
             // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
             
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
             center: ['40%', '50%'],
             roseType : 'radius',
            //  label: {
            //     normal: {
            //         show: true,
            //         position: 'center',
            //         formatter: '出境游',
            //         color: '#fff',
            //         fontSize: 16
            //     }
            // },
            
             data: data
         }]
     };
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
 })