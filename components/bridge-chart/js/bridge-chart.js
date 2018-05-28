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
            value:65
        },
        {
            name:'已维修设备',
            value:40
        }
    ]
    render(xAxis,data);
    function render (xAxis,data) {
        var str = '';
        str += '<div class="bridge-chart__num">'+
                '<ul class="num-lists">'+
                '</ul>'+
            '</div>'+
            '<div class="bridge-chart__inner">'+
                '<div class="blue"></div>'+
                '<div class="red"></div>'+
                '<div class="gray"></div>'+
                '<div class="bridge"></div>'+
                '<div class="top-line"></div>'+
                '<div class="red-line"></div>'+
                '<div class="blue-line"></div>'+
            '</div>'+
            '<div class="bridge-chart__legend">'+
                
            '</div>';

        $('#bridgeChart').append(str);
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
        $('.bridge-chart__legend').append(dlStr);
        var maxNum = xAxis[xAxis.length-1];
        var redNum = data[1].value;
        var blueNum = data[2].value;

        var redP = redNum/maxNum*100;
        var blueP = blueNum/maxNum*100

        $('.bridge-chart__inner .red,.bridge-chart__inner .red-line').animate({
            top:(100-redP)+'%'
        },800)
        $('.bridge-chart__inner .blue,.bridge-chart__inner .blue-line').animate({
            top:(100-blueP)+'%'
        },800)
    }
    

    
})