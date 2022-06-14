// JavaScript goes here

const navLinks = document.querySelectorAll('nav ul li a') ;

navLinks.forEach(function(eachLink){
    eachLink.addEventListener("click" , smoothScroll) ;
}) ;

function smoothScroll(event){


    event.preventDefault() ;
    
    const targetID  = event.target.getAttribute("href") ;
    const targetSection= document.querySelector(targetID) ;

    const originalTop = targetSection.getBoundingClientRect().top -200 ;

    window.scrollBy({top: originalTop , left: 0 ,behavior: "smooth"}) ;
}


window.addEventListener("load" , function(){
    const posts = document.querySelectorAll('section') ;
    let postTops = [] ;
    let pagetop ;
    let counter = 1 ;
    let prevCounter = 1 ;
    let doneResizing 

    // Gets the distance from the section to the top of the window
//    console.log(posts[0].getBoundingClientRect().top + window.scrollY)  ;

    resetPagePosition() ;
   
   window.addEventListener("scroll",function(){
       pagetop = window.scrollY + 250 ;


       if(pagetop > postTops[counter] ){
           counter++ ;
       }else if(counter > 1 && pagetop < postTops[counter - 1]){
           counter-- ; 
       }

       if(counter != prevCounter){

        navLinks.forEach(function(eachLink){

            eachLink.removeAttribute("class") ;
        })

        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`) ;
        thisLink.className = "selected" ; 
        prevCounter = counter ;
       }
   }) ;

   window.addEventListener("resize" , function(){
       clearTimeout(doneResizing) ;
       doneResizing = setTimeout( function(){
           resetPagePosition() ;
       }, 500) ;
   }) ;

    function resetPagePosition(){

        postTops = [] ;

        posts.forEach(function(post, index){
            postTops[index] = Math.floor(post.getBoundingClientRect().top + window.scrollY) ;
        })

        const pagePosition = window.scrollY + 250 ;
        counter = 0 ;


        postTops.forEach(function(posts){
            if(pagePosition > posts){
                counter++ ;
            }
        })

        navLinks.forEach(function(eachLink){

            eachLink.removeAttribute("class") ;
        })

        const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`) ;
        thisLink.className = "selected" ; 



    }
  
}) ;
