// 设备近12月平均变化趋势
$(function () {
    var myChart3 = echarts.init(document.getElementById('linecharts1'));
    var option = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        // '{a} <br/>{b} : {c}'
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4,
            padding:10,
            
            textStyle:{
                color:"#000"
            },   
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'line',       // 默认为直线，可选为：'line' | 'shadow'
                backgroundColor:'rgba(239,246,255,0,8)',
                lineStyle:{
                    width:80,
                    // type:"shadow",
                    shadowColor:"#f7faff",
                    opacity:0.5,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 0.9,
                        colorStops: [{
                            offset: 0, color: '#f7faff',opacity:'0.1' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#e3eeff',opacity:'0.1' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                },
                shadowStyle : {              // 阴影指示器样式设置
                    width: 'auto',         // 阴影大小
                    backgroungColor: 'rgba(239,246,255,0,1)'  // 阴影颜色
                }
            },
            extraCssText: 'box-shadow: 0 0 8px rgba(52, 148, 253, 0.3)' ,
        },
        color:["#63d393","#fad240","#f86a6a"],
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'100-80分',icon:'rect'},
                {name:'60-80分',icon:'rect'},
                {name:'0-60分',icon:'rect'},
            ]
        },
        xAxis: [{
            type: 'category',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLine:{
                show:true,
                onZero: false,
                lineStyle: {
                    color: '#ff6976'
                }
            },

            data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06','2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
        
            },
        {
            type: 'category',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLine:{
                show:true,
                onZero: false,
                lineStyle: {
                    color: '#4888f8'
                }
            },
            data: ['2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06','2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12']
        }],
        yAxis:{
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:"10%",
            containLabel: true
        },
        series: [
           
            {
                type: 'line',
                smooth: true,
                data: [25, 60, 20, 80, 23, 42, 30, 120, 50, 80, 10, 50],
                lineStyle: {
                    normal: {
                        color: '#4888f8'
                    }
                }
            },
            {
                type: 'line',
                smooth: true,
                data: [50, 40, 70, 60, 100, 80],
                lineStyle: {
                    normal: {
                        color: '#ff6976'
                    }
                }
            }
            
        ]
    };

    myChart3.setOption(option);
    $(window).resize(function () {
        myChart3.resize();
    })

})