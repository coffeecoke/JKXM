$(function () {
    var data = echarts.dataTool.prepareBoxplotData([
        [0,20,60,60,80],
        [0,30,70,70,90],
        [0,20,40,40,60],
        [0,10,15,20,40],
        [0,5,10,10,18]
    ]);
    var boxplotChart = echarts.init(document.getElementById('boxplotChart'));
    var option = {
       
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',  // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: '#ccc',            // 提示边框颜色
            borderRadius: 4, 
            padding:10,
            textStyle:{
                color:"#000"
            },
            formatter:function(prames){
                console.log(prames)
                var datas=prames[0].data;
                var datas1=prames[0].axisValue;
                console.log(datas1)
                return '坠跎编号'+'<br/>'+
                        "<div style='color:#999;'>"+datas1+"</div>"+
                        '<div style="color:#999;">位移量:'+datas+'</div>'
            },
            axisPointer: {
                type : 'line',       // 默认为直线，可选为：'line' | 'shadow'
                backgroundColor:'rgba(239,246,255,0,8)',
                
                lineStyle:{
                    width:100,
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
                            offset: 0, color: '#dfedff',opacity:'0.1' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#dfedff',opacity:'0.1' // 100% 处的颜色
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
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:["WY-1-1-5","WY-1-1-5","WY-1-1-5","WY-1-1-5","WY-1-1-5"],
            boundaryGap: true,
            nameGap: 30,
            splitArea: {
                show: false
            },
            axisLabel: {
                formatter: 'WY-1-1-5'
            },
            splitLine: {
                show: false,
            },
            
        },
        yAxis: {
            type: 'value',
            name: '位移mm',
            max:120,
            splitLine: {
                show: true,
                lineStyle:{
                    type:"dashed"
                }
            },
        },
        series: [
            {
                name: 'boxplot',
                type: 'boxplot',
                data: data.boxData,
                itemStyle:{
                    color:'#3494fd',
                    borderColor:'#3494fd'
                }
            }
        ]
    };
    
    boxplotChart.setOption(option);
})
