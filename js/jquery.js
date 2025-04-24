$(()=>{
    $('.menu_mobile i').click(()=>{
        var el = $('.side_bar')

        if(el.is(':visible')){
            el.hide();
            $('.main_content').css('left', '0');
        }else{
            el.show();
            $('.main_content').css('left', '300px');
        }
    })
})