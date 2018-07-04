// 设施健康评分
$(function(){
    var myChart1 = echarts.init(document.getElementById('pictorialBar'));
    var option1 = {
        color: ['#5a9eee'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
//        legend: {
//            top: '5%',
//            data: ['最高位移量', '最位移量','平均位移量','最低位移量']
//        },
        grid: {
            left: '3%', 
            right: '3%',
            bottom: '1%',
            top: '20%',
            containLabel: true
        },
        calculable : true,
        xAxis:  {
            type: 'category',
            data: ['2017-07','2017-08','2017-09','2017-10','2017-11','2017-12','2018-01','2018-02','2018-03','2018-04','2018-05',"2018-06"]
        },
        yAxis: {
            type: 'value',
            name: '分数',
        },
        series: [
//            {
//                name: '最低位移量',
//                type: 'bar',
//                stack: '总量',
//                label: {
//                    normal: {
//                        show: true,
//                        position: 'insideTop',
//                    }
//                },
//                data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
//            },
            {
                name: '最位移量',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideTop',
                    }
                },
                data: [70, 60, 50, 40, 47, 60, 80, 90, 98, 67, 37, 81]
            },
//            {
//                name: '平均位移量',
//                type: 'bar',
//                stack: '总量',
//                label: {
//                    normal: {
//                        show: true,
//                        position: 'insideTop',
//                    }
//                },
//                data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
//            },
//            {
//                name: '最高位移量',
//                type: 'bar',
//                stack: '总量',
//                label: {
//                    normal: {
//                        show: true,
//                        position: 'insideTop',
//                    }
//                },
//                data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
//            },
        ]
    };

    myChart1.setOption(option1);
    $(window).resize(function () {
        myChart1.resize();
    })
})

// 
$(function () {
    var myChart2 = echarts.init(document.getElementById('pieChart1'));
      
        var option2 = {
            color: ['#5a9eee','#25b5fb','#a079d4','#6edbb6'],
            tooltip : {
                trigger: 'item',
                formatter: "{b} : <br/> {c} ({d}%)"
            },
            grid: {
                left: '33%', 
                right: '13%',
                bottom: '1%',
                top: '30%',
                containLabel: true
            },
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    radius : [30, 100],
                    center : ['50%', '65%'],
                    roseType : 'radius',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {value:35, name:'告警分别'},
                        {value:30, name:'维护次数'},
                        {value:25, name:'使用年限'},
                        {value:10, name:'劣化趋势'},
                    ]
                }
            ]
        };
        
        // 使用刚指定的配置项和数据显示图表。
        myChart2.setOption(option2);
}) 

//劣化趋势
$(function () {
    var myChart1 = echarts.init(document.getElementById('lineChart1'));
    var option1 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'none'
          },
          backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
          borderColor: '#ccc',    // 提示边框颜色
          borderRadius: 4,
          padding:10,
          textStyle:{
              color:"#000"
          }, 
          formatter: function (params) {
            return "近1年" + ': ' + params[0].name+"<br/>"+"劣化"+":"+params[0].data+"";
          },
          extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)',            
        },
        color:["#5b85f3","#f8c538","#fd582e"],
        xAxis: {
            type: 'category',
            splitLine: {
                show: false,
            },
            data: ['2017-07','2017-08','2017-09','2017-10','2017-11','2017-12','2018-01','2018-02','2018-03','2018-04','2018-05',"2018-06"]
        },
        yAxis: {
            type: 'value',
//            max: 120,
            // axisLabel:{formatter:'{value} cm'}, //加单位
            splitLine: {
                show: true, //辅助线
                lineStyle: {
                    type: 'dashed' //solid实线 dashed虚线,
                }
            }
        },
        grid: { //组件在容器的位置
            left: '3%',
            right: '8%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        series: [
          {
              name: '实际范围',
              type: 'line',
              data: [7, 7.3, 6.5, 7.7, 7.1, 8, 7.5, 9.5, 9, 8, 10, 9,7, 7.3, 6.5, 7.7, 12, 8, 11, 9],
              symbol: 'none', //小圆圈
              smooth: true,
              itemStyle:{
                  color:'#3494fd'
              },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#75b4fe'
                      }, {
                          offset: 1,
                          color: '#fff'
                      }])
                  }
              },
          }
        ]
    };
  
    myChart1.setOption(option1);
    $(window).resize(function () {
        myChart1.resize();
    })
  
  })
  