$(function(){


    var myChart = echarts.init(document.getElementById('lineChart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show:false,
            data:['邮件营销','联盟广告','视频广告']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            },
            show:false
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月']
        },
        yAxis: {
            data: ['0','20','40','60','80','100','120']
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[0, 16, 30, 20, 40, 100, 20,0, 16, 30, 20, 40, 100, 20]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[0, 16, 30, 20, 40, 100, 20,0, 16, 30, 20, 40, 100, 20]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[0, 16, 30, 20, 40, 100, 20,0, 16, 30, 20, 40, 100, 20]
            }
        ]
    };


    myChart.setOption(option);

})