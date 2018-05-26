$(function(){
    var progress = $(".progress-bar-inner");
    progress.each(function (i)
    {
        var data = $(this).attr('data-value');
        $(this).prev().find("span").html(data);
    });
});