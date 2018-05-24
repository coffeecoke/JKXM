$(function(){
    var myChart = echarts.init(document.getElementById('lineChart'));
    var option = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        tooltip : {
            trigger: 'item',
            // formatter: '{a} <br/>{b} : {c}',
            axisPointer : {            // 坐标git轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:true,
            left: 'left',
            data: ['2的指数', '3的指数']
        },
        xAxis: {
            type: 'category',
            name: 'x',
            splitLine: {show: false},
            data: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月',"01月","01月"]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            name: 'y'
        },
        series: [
            {
                name: '3的指数',
                type: 'line',
                data: [20,23, 15, 27, 21, 30, 25, 50, 40]
            },
            {
                name: '2的指数',
                type: 'line',
                data: [25, 30, 20, 38, 23, 42, 30, 60, 50]
            },
            {
                name: '1/2的指数',
                type: 'line',
                data: [50,40,70,60,90,80,100,90,120]
            }
        ]
    };
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    })

})