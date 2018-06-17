//维修情况 chart 逻辑
$(function () {
    var xAxis = [0,20,40,60,80,100,120]
    var data = [
        {
            name:'全部设备',
            value:120
        },
        {
            name:'待维修设备',
            value:80
        },
        {
            name:'已维修设备',
            value:60
        }
    ]
    render(xAxis,data);
    function render (xAxis,data) {
        var str = '';
        str += '<div class="weight-chart__num">'+
                '<ul class="num-lists">'+
                '</ul>'+
            '</div>'+
            '<div class="weight-chart__inner">'+
                '<div class="blue"></div>'+
                '<div class="red"></div>'+
                '<div class="gray"></div>'+
                '<div class="weight"></div>'+
                '<div class="top-line"></div>'+
                '<div class="red-line"></div>'+
                '<div class="blue-line"></div>'+
            '</div>'+
            '<div class="weight-chart__legend">'+
                
            '</div>';

        $('#weightChart').append(str);
        var liStr = '';
        var dlStr = ''
        for(var i = xAxis.length-1;i>=0;i--) {
            liStr += '<li>'+xAxis[i]+'</li>';
            
        }
        $('.num-lists').append(liStr)
       
        dlStr += '<dl class="gray">'+
                        '<dt>'+data[0].value+'</dt>'+
                        '<dd>'+data[0].name+'</dd>'+
                     '</dl>'+
                     '<dl class="red">'+
                        '<dt>'+data[1].value+'</dt>'+
                        '<dd>'+data[1].name+'</dd>'+
                     '</dl>'+
                     '<dl class="blue">'+
                        '<dt>'+data[2].value+'</dt>'+
                        '<dd>'+data[2].name+'</dd>'+
                     '</dl>'
        $('.weight-chart__legend').append(dlStr);
        var maxNum = xAxis[xAxis.length-1];
        var redNum = data[1].value;
        var blueNum = data[2].value;

        var redP = redNum/maxNum*100;
        var blueP = blueNum/maxNum*100

        $('.weight-chart__inner .red,.weight-chart__inner .red-line').animate({
            top:(100-redP)+'%'
        },800)
        $('.weight-chart__inner .blue,.weight-chart__inner .blue-line').animate({
            top:(100-blueP)+'%'
        },800)
    }
    

    
})