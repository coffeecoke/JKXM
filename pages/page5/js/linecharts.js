$(function () {
    var myChart= echarts.init(document.getElementById('linecharts'));
    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12', '13', '14','15', '16', '17', '18', '19', '20']
        },
        yAxis: {
            type: 'value',
            min:0,
            max:120
        },
         grid:{
             top:'10%',
             left:'2%',
             right:'2%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: [20,80,30,90,40,120,10,70,20,90,5,120,30,50,30,70,10,120,40,90],
            type: 'line',
            smooth: true,
            itemStyle:{
                color:'#3494fd'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3494fd'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
        }]
    };
myChart.setOption(option);
})

$(function () {
    var myChart1= echarts.init(document.getElementById('linecharts1'));
    option1 = {
        backgroundColor:'#f5f8ff',
        title:{
            show:true,
            text:"A值",
            textStyle:{
                fontSize:70,
                color:'#cfe0fd'
            },
            width:'100px',
            height:'100px',
            top:50,
            left:"50%",
            z:0
        },
        xAxis: {
            type: 'category',
            data: ['5/10 15:00', '5/11 15:00', ' 5/12 15:00', ' 5/13 15:00', ' 5/14 15:00', ' 5/15 15:00', ' 5/16 15:00',' 5/17 15:00', ' 5/18 15:00', ' 5/19 15:00', ' 5/20 15:00']
        },
        yAxis: [{
            name:'位移mm',
            type: 'value',
            min:0,
            max:80
        },
        {   
            name:'°C',
            type: 'value',
            min:0,
            max:80
        }
    ],
         grid:{
             top:'15%',
             left:'2%',
             right:'2%',
             bottom:0,
             containLabel:true
         },
         tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        series: [{
            data: [40,80,30,80,40,60,40,70,40,80,20],
            type: 'line',
            name:"A值",
            symbol:0,
            symbolSize:0,
            smooth: true,
            itemStyle:{
                color:'#3494fd'
            },
            
        },
        {
            data: [50,55,56,57,58,59,45,46,47,48,49],
            type: 'line',
            name:"B值",
            symbol:0,
            symbolSize:0,
            smooth: true,
            itemStyle:{
                color:'#CCC'
            },
            
        }]
    };
myChart1.setOption(option1);
})

$(function () {
    var myChart2= echarts.init(document.getElementById('linecharts2'));
    option2 = {
        backgroundColor:'#fffcf5',
        title:{
            show:true,
            text:"B值",
            textStyle:{
                fontSize:70,
                color:'#cfe0fd'
            },
            width:'100px',
            height:'100px',
            top:50,
            left:"50%",
            z:0
        },
        xAxis:[ {
            type: 'category',
            // axisLine: { onZero: false },
            data: ['', '', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ']
        },
        {
            show:false,
            type: 'category',
            axisLine: { onZero: false },
            
            data: ['', '', ' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ']
           
            }
    ],
        yAxis: [{
            name:'位移mm',
            type: 'value',
            min:0,
            max:80,
            nameLocation: "start",
            inverse: true 
        },
        {
            name:'°C',
            type: 'value',
            min:0,
            max:80,
            nameLocation: "start",
            inverse: true 
        }
    ],
         grid:{
             top:'10%',
             left:'2%',
             right:'2%',
             bottom:0,
             containLabel:true
         },
        series: [{
            data: [40,80,30,80,40,60,40,70,40,80,20],
            type: 'line',
            smooth: true,
            symbol:0,
            symbolSize:0,
            itemStyle:{
                color:'#fad984'
            },
            
        },        {
            data: [50,55,56,57,58,59,45,46,47,48,49],
            type: 'line',
            name:"B值",
            symbol:0,
            symbolSize:0,
            smooth: true,
            itemStyle:{
                color:'#CCC'
            },
            
        }]
    };
myChart2.setOption(option2);
})


$(function () {
    var myChart3 = echarts.init(document.getElementById('linecharts3'));
    var option3 = {
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
            formatter:function(prames){
                var datas=prames[0].data
                var datas1=prames[1].data
                var datas2=prames[2].data
                return '<div>温度区间</div>'+
                '<div>19℃ - 20℃</div>'+
                '<div style="color:#b3b4b4">增长最大值:<span>'+datas+'</span></div>'+
                '<div style="color:#b3b4b4">平均值:<span>'+datas1+'</span></div>'+
                '<div style="color:#b3b4b4">最小值<span>'+datas2+'</span></div>'
            },
            textStyle:{
                color:"#000"
            },   
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'shadow',       // 默认为直线，可选为：'line' | 'shadow'
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
        color:["#5b85f3","#f8c538","#fd582e"],
        legend: {
            show: true,
            left: 'right',
            itemWidth:8,
            itemHeight:8,
            data: [
                {name:'最低位移量',icon:'circle'},
                {name:'最高位移量',icon:'circle'},
                {name:'平均位移量',icon:'circle'}
            ]
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            data: ['17°C', '18°C', '19°C', '20°C', '21°C', '22°C', '23°C', '24°C','25°C']
        },
        yAxis: {
            type: 'value',
            name: '位移mm',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        series: [
            {
                name: '最低位移量',
                type: 'line',
                data: [40, 30, 25, 50, 40, 70, 50, 40,60],
                symbol: 'none',
                lineStyle: {
                    normal: {
                        color: '#f8c538'
                    }
                }
            },
            {
                name: '最高位移量',
                type: 'line',
                symbol: 'none',
                data: [ 23, 42, 30, 60, 50, 80, 120, 140,100],
                lineStyle: {
                    normal: {
                        color: '#5b85f3'
                    }
                }
            },
            {
                name: '平均位移量',
                type: 'line',
                symbol: 'none',
                data: [90, 80, 100, 90, 120, 130, 90, 100,120],
                lineStyle: {
                    normal: {
                        color: '#fd582e'
                    }
                }
            }
        ]
    };

    myChart3.setOption(option3);
    $(window).resize(function () {
        myChart1.resize();
    })

})