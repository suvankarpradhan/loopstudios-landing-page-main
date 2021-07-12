if($(window).width()<480){
    $('.left-portion>img').attr('src','images/mobile/image-interactive.jpg');
}
$('#icon').click(()=>{
    if($('.navbar').attr('class')=="navbar"){
        $('.navbar').attr('class','navbar responsive');
        $('.site-header').css('background','rgba(0,0,0,0.9)');
        $('.site-header>h1').css('visibility','hidden');
        $('#icon').attr('src','images/icon-close.svg');
    }else{
        $('.navbar').attr('class','navbar');
        $('#icon').attr('src','images/icon-hamburger.svg');
        $('.site-header').css('background','url("images/mobile/image-hero.jpg") no-repeat rgba(0, 0, 0, 0.4)');
        $('.site-header>h1').css('visibility','visible');
    }
})