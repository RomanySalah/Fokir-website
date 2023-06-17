let aboutOffset=$('#About').offset().top 
function stayColor(){
    let scrollTop = $(window).scrollTop();
    if (scrollTop > aboutOffset -100) {
        $('#main-nav').css('background-color', 'grey')
        $('#btnUp').fadeIn(1000)
    }else{
        $('#main-nav').css('background-color', 'transparent')
        $('#btnUp').fadeOut(1000)
    }
}
stayColor()
$(window).scroll(() => {
   stayColor()
})
$('#btnUp').click(()=>{
    $('html,body').animate({scrollTop:0},2000)
})
