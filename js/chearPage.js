$(function () {  

// 获取白菜价标题数据
$.ajax({
    type:'get',
    url:'http://193.112.55.79:9090/api/getbaicaijiatitle',
    data:'json',
    success:function (result) {
        console.log(result);
        var html=template('tabTem',result)
        $('.nav-tabs').html(html);
        Tabitems();
        getindex();
        getPro();
      }
})

//预先显示当前页面
function getindex(){
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getbaicaijiaproduct",
        data: {
            titleid:0
        },
        dataType: "json",
        success: function (result) {
            console.log(result);
            var html=template('productTem',result);
            $('.tab-content').html(html);
        }
    });
}

// 获取产品图得数据
function getPro(){
    $('.nav-tabs').on('click','li',function () {  
        var id=this.getAttribute("titleid")
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getbaicaijiaproduct",
            data: {
                titleid:id
            },
            dataType: "json",
            success: function (result) {
                console.log(result);
                var html=template('productTem',result);
                $('.tab-content').html(html);
            }
        });
    })
    

}


//实现tab栏滑动效果
function Tabitems() { 

    var allLi = $('.tabs-parent .nav-tabs').find('li')
        var totalWidth = 0
        allLi.each(function(index,value){
            totalWidth += $(value).innerWidth()
        })
        $('.tabs-parent .nav-tabs').width(totalWidth)
        // 通过iScroll插件来实现滑动
        var scollDom = document.querySelector('.tabs-parent')
        var myScroll = new IScroll('.tabs-parent',{
            scrollX: true, scrollY: false
        });
        // 初始化tooltip
        $('[data-toggle="tooltip"]').tooltip()
 }



















})