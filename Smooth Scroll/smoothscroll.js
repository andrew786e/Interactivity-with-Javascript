// Smoothscroll Script...

$("nav ul li a").click(function(){
    var thisSection = $(this).attr("href") ;
    var thisLink = $(this) ;

    // Scrols page to the selected section
    // Stop is used to stop the animation before it is complete if another
    // Section is clicked 
    $('html , body').stop().animate({scrollTop: $(thisSection).offset().top -200},800, 'easeOutCirc', 
    function(){
        // alert($(window).scrollTop()) ;
        console.log( $(thisSection).offset().top)


        $('nav ul li a').removeAttr('class') ;

        thisLink.addClass('selected') ;

    }) ;
})

$(window).on('load',function(){

    var posts = $('section') ;
    var pageTop ;
    var postPos ;
    var counter= 0 ;

    var postTops = [] ;

    posts.each(function(){
        postTops.push(Math.floor($(this).offset().top)) ;
    }) ;



    $(window).scroll(function(){

        // postPos = $(posts[0]).offset().top ;
        pagetop = $(window).scrollTop() + 210;

        // console.log(`${postTop} and ${postPos}`)

        if(pagetop > postTops[counter + 1]){
            counter++ ; 
            console.log(`scrolling down ${counter}`) ;
        }else if(counter > 0 && pagetop < postTops[counter]){
            counter-- ;
            console.log(`scrolling up ${counter}`) ;
         }
        
    }) ;
}) ;

