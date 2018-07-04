//监测数据
$(function () {
    var myChart1 = echarts.init(document.getElementById('monitoringChart1'));
    var option1 = {
        title: {
            text: '设施J-J-001告警前24小时实时监测数据',
            left: 'center'
        },
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
            return "近24小时" + ': ' + params[0].name+"<br/>"+"A值"+":"+params[0].data+"cm";
          },
          extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)',            
        },
        color:["#5b85f3","#f8c538","#fd582e"],
        xAxis: {
            name: '近24小时',
            type: 'category',
            splitLine: {
                show: false,
            },
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', "10", "11", "12","13","14","15","16","17","18","19","20","21","22","23","24",]
        },
        yAxis: {
            type: 'value',
            name: 'A值',
            max: 50,
            axisLabel:{formatter:'{value} cm'}, //加单位
            splitLine: {
                show: true, //辅助线
                lineStyle: {
                    type: 'dashed' //solid实线 dashed虚线,
                }
            }
        },
        grid: { //组件在容器的位置
            left: '3%',
            right: '15%',
            bottom: '3%',
            containLabel: true
        },
        series: [
          {
              name: '实际范围',
              type: 'line',
              data: [20, 23, 15, 27, 21, 30, 25, 45, 40, 30, 50, 40,20, 23, 15, 27, 21, 30, 25, 45, 40, 30, 45,10],
              // symbol: 'none', //小圆圈
              lineStyle: {
                  normal: {
                      color: '#3ba1ff'
                  }
              },
              markLine : {  //标识线
                  itemStyle: {  
                      normal: {   
                          label: {  
                              formatter: '{b}' //b:name c:yAxis
                          }  
                      }  
                  }, 
                  data : [  
                      {type : 'min',  
                          name: '实际范围',
                          yAxis:10,
                          itemStyle:{
                              normal: { 
                                  color: '#1cd27e' 
                              }
                          }
                      },  
                      {type : 'middle',  
                          name: '阈值范围',
                          yAxis:15,
                          itemStyle:{
                              normal: { 
                                  color: '#ff6573' 
                              }
                          }
                      },
                      {type : 'max',  
                          name: '极限范围',
                          yAxis:20,
                          itemStyle:{
                              normal: { 
                                  color: '#ffcd22' 
                              }
                          }
                      } 
                  ]  
              } 
          }
        ]
    };
  
    myChart1.setOption(option1);
    $(window).resize(function () {
        myChart1.resize();
    })
  
  })
  
  // 健康趋势
  $(function () {
    var myChart2 = echarts.init(document.getElementById('monitoringChart2'));
    var option2 = {
        title: {
            text: '设施J-J-001近一年健康趋势',
            left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'none'
          },
          backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
          borderColor: '#ccc',            // 提示边框颜色
          borderRadius: 4,
          padding:10,
          textStyle:{
              color:"#000"
          }, 
          formatter: function (params) {
            return "日期" + ': ' + params[0].name+"<br/>"+"评分"+":"+params[0].data;
          },
          extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)',            
        },
      //   legend: {
      //     orient: 'vertical', 
      //     left: 'left', 
      //     data:['实际范围','阈值范围','极限范围'],
      //     selected: { 
      //     '实际范围' :true, 
      //     '阈值范围' :true,
      //     '极限范围' :true
      //     } 
      //   },
        color:['#81b22f','#f3d71c','#f4b9a9'],
        xAxis: {
          type: 'category',
          name: '时间',
          splitLine: {
              show: true,
          },
          data: ['2017-3', '2017-4', '2017-5', '2017-6','2017-7', '2017-8','2017-9', '2017-10','2017-11', '2017-12','2018-1', '2018-2'],
          axisLabel: {  //x轴文字倾斜
              interval:0,  
              rotate:40,  
          },
          boundaryGap: false,  //X轴从零刻度开始
        },
        yAxis: {
            type: 'value',
            name: '评分',
            max: 100,
            splitLine: {
                show: true, //辅助线
                lineStyle: {
                    type: 'dashed' //solid实线 dashed虚线,
                }
            }
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        series: [
          {
              name: '实际范围',
              type: 'line',
              smooth: true, //圆弧
              data: [20, 23, 15, 27, 21, 30, 25, 45, 40, 30, 50, 40],
              symbol: 'none',
              lineStyle: {
                  normal: {
                      color: '#3ba1ff'
                  }
              },
              areaStyle: {normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#00c1de'
                      }, {
                          offset: 1,
                          color: '#e5fcff'
                      }]),
              }}
          }
        ]
    };
  
    myChart2.setOption(option2);
    $(window).resize(function () {
        myChart2.resize();
    })
  
  })
  