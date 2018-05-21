$(function(){
    var myChart = echarts.init(document.getElementById('lineChart'));
    var option = {
        // title: {
        //     text: '对数轴示例',
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            show:false,
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
            type: 'log',
            name: 'y'
        },
        series: [
            {
                name: '3的指数',
                type: 'line',
                data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
            },
            {
                name: '2的指数',
                type: 'line',
                data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
            },
            {
                name: '1/2的指数',
                type: 'line',
                data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
            }
        ]
    };
    myChart.setOption(option);

    // var myChart = echarts.init(document.getElementById('lineChart'));
    // var option = {
    //     tooltip: {
    //         trigger: 'axis'
    //     },
    //     legend: {
    //         show:false,
    //         data:['邮件营销','联盟广告','视频广告']
    //     },
    //     grid: {
    //         left: '3%',
    //         right: '4%',
    //         bottom: '3%',
    //         containLabel: true
    //     },
    //     toolbox: {
    //         feature: {
    //             saveAsImage: {}
    //         },
    //         show:false
    //     },
    //     xAxis: {
    //         type: 'category',
    //         boundaryGap: false,
    //         data: ['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月']
    //     },
    //     yAxis: {
    //         data: ['0','20','40','60','80','100','120']
    //     },
    //     series: [
    //         {
    //             name:'邮件营销',
    //             type:'line',
    //             stack: '总量',
    //             data:[0, 16, 30, 20, 40, 100, 20,0, 16, 30, 20, 40, 100, 20]
    //         },
    //         {
    //             name:'联盟广告',
    //             type:'line',
    //             stack: '总量',
    //             data:[0, 16, 30, 20, 40, 100, 20,0, 16, 30, 20, 40, 100, 20]
    //         },
    //         {
    //             name:'视频广告',
    //             type:'line',
    //             stack: '总量',
    //             data:[0, 16, 30, 20, 40, 100, 20,0, 16, 30, 20, 40, 100, 20]
    //         }
    //     ]
    // };


    // myChart.setOption(option);

})