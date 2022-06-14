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

    // Same as prevent default method 
    return false ;
})

$(window).on('load',function(){

    var posts = $('section') ;
    var pageTop ;
    var postPos ;
    var counter= 0 ;
    var prevCounter = 0 ;
    var alllinks = $("nav ul li a") ;
    var doneResizing ;

    var postTops = [] ;
    resetPagePosition() ;



    $(window).scroll(function(){

        // postPos = $(posts[0]).offset().top ;
        pagetop = $(window).scrollTop() + 210;

        // console.log(`${postTop} and ${postPos}`)

        if(pagetop > postTops[counter + 1]){
            counter++ ; 
        }else if(counter > 0 && pagetop < postTops[counter]){
            counter-- ;
        }

        if(counter != prevCounter){
            $(alllinks).removeAttr('class') ;
            $("nav ul li a").eq(counter).addClass("selected") ;
            prevCounter = counter ;
        }
        
    }) ;

    $(window).on("resize", function(){
        clearTimeout(doneResizing) ;
        doneResizing = setTimeout(resetPagePosition , 500) ;
    })

    function resetPagePosition(){
        postTops = [] ;
        posts.each(function(){
            postTops.push(Math.floor($(this).offset().top)) ;
        }) ;

        var pagePosition = $(window).scrollTop() ;
        counter = 0 ;

        for(var i = 0 ; i < postTops.length ; i++){
            if(pagePosition > postTops[i]){
                counter++ ;
            }
        }

        if(counter != 0){
            counter-- ;
        }

        console.log(counter) ;

        $(alllinks).removeAttr("class") ;
        $("nav ul li a").eq(counter).addClass("selected") ;
    }

}) ;

