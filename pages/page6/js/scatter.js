$(function () {
    var myChart = echarts.init(document.getElementById('scatter'));
    var hours = ['jtk_300 ', 'jtk_300 ', 'jtk_300 ', 'jtk_300 ', 'jtk_300 ', 'jtk_300 ', 'jtk_300 '];
    var days = ['4月', '5月', '6月'];
    var colors = ['#ff949d','#ffdd64','#74a4f9'];
    var data = [
        [0, 0, 100],
        [0, 1, 80],
        [0, 2, 70],
        [0, 3, 60],
        [0, 4, 40],
        [0, 5, 30],
        [0, 6, 20],
        
        [1, 0, 140],
        [1, 1, 120],
        [1, 2, 110],
        [1, 3, 80],
        [1, 4, 63],
        [1, 5, 50],
        [1, 6, 20],
       
        [2, 0, 120],
        [2, 1, 100],
        [2, 2, 90],
        [2, 3, 60],
        [2, 4, 35],
        [2, 5, 20],
        [2, 6, 14],
       
        
    ];

    var option = {
        tooltip: {
            position: 'top',
            formatter: function (params) {
                return params.name + '  ' + params.value[1]
            }
        },
        
        title: [],
        singleAxis: [],
        series: []
    };
    //这里应该是遍历的意思，idx是遍历每一根轴的标志
    echarts.util.each(days, function (day, idx) {
        option.title.push({
            textBaseline: 'middle',
            top: (idx + 1) * 100 / 5 - 9 + '%', //每个标题的位置
            text: day
        });
        option.singleAxis.push({
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: (idx * 100 / 5 + 10) + '%',
            height: (100 / 5 - 19) + '%', //5是指有五根轴，这里计算的是每根轴离顶端的距离
            left: '14%',
            axisLabel: {
                //interval:3,
                margin: 30,
                color:'#333'

            },
            axisLine:{
                lineStyle:{
                    color:'#ccc',
                    width:1,   //这里是坐标轴的宽度,可以去掉
                    type:'dashed'
                }
            }
        });
        option.series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: [],
            itemStyle: {
                normal: {
                    
                    color: colors[idx]
                }
            },
            symbolSize: function (dataItem) {
                return dataItem[1] * 0.5;
            }
        });
    });

    echarts.util.each(data, function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });
    myChart.setOption(option);
})