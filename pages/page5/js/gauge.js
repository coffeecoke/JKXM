$(function () {
    var myChart= echarts.init(document.getElementById('gauge'));
    var myRate1 = 1000;
    option = {
        tooltip: {
            show: true,
        },
        title:{
            show:true,
            text:"健康评分",
            textStyle:{
                fontSize:18,
                color:'#8f8f8f'
            },
            width:'100px',
            height:'100px',
            top:'60%',
            left:"35%",
            z:0
        },
        // grid:{
        //     top:'0%',
        //     left:'0%',
        //     right:'10%',
        //     bottom:'0%'
        // },
        series: [{
            type: 'gauge',
            center: ['40%', '60%'], // 默认全局居中  
            radius: '100%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            startAngle: 200,
            endAngle: -20,
            clockwise: true,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#bdbdbd']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#bdbdbd',
                    width: 1
                },
                length: -15,
                splitNumber: 10
            },
            splitLine: {
                show: false,
                length: -20,
                lineStyle: {
                    color: '#bdbdbd',
                }
            },
            axisLabel: {
                distance: 30,
                textStyle: {
                    color: "#40a0ff",
                    fontSize: "15",
                    fontWeight: "bold"
                }
            },
            pointer: { //仪表盘指针
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]
        }, {
            startAngle: 200,
            endAngle: -20,
            type: 'gauge',
            center: ['40%', '60%'], // 默认全局居中  
            radius: '60%',
            min: 0,
            max: 100,
            splitNumber: 0,
            axisLine: { // 坐标轴线  
                lineStyle: {
                    color: [
                        [0.66, '#fff'],
                        [1, '#fff']
                    ], // 属性lineStyle控制线条样式  
                    width: 0
                }
            },


            axisLabel: { // 坐标轴小标记  
                textStyle: { // 属性lineStyle控制线条样式  
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                }
            },
            splitLine: { // 分隔线  
                length: 10, // 属性length控制线长  
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                    width: 0,
                    color: '#444'
                }
            },
            pointer: { // 分隔线 指针  
                color: '#f00',
                show:false,
                width: 0,
                length: 230
            },
            detail: {
                show: false
            },

        }, {
            name: '累计受理',
            type: 'gauge',
            startAngle: 200,
            endAngle: -20,
            radius: '60%',
            center: ['40%', '60%'], // 默认全局居中  

            min: 0,
            max: 1000,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 8,
                    shadowBlur: 0,
                    color: [
                        [0.2, '#f2f2f2'],
                        [0.4, '#f2f2f2'],
                        [0.6, '#f2f2f2'],
                        [0.8, '#f2f2f2'],
                        [1, '#f2f2f2']
                    ]
                },
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
                length: 20,

            },

            axisLabel: {
                show: false
            },
            pointer: {
                show: false,
            },
            detail: {
                show: true,
                offsetCenter: [0, '-30%'],
                textStyle: {
                    fontSize: 50,
                    
                },
                
            },
            itemStyle: {
                normal: {
                    color: "#fff"
                }
            },
            data: [
                {
                
                value: 50
                
            }
            ]
        }]
    };
myChart.setOption(option);
})