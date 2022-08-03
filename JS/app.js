$(function(){
    //show button

let hideBtn = $(`.hide`)
let box = $(`.box`)
     
hideBtn.click(function(){
    box.fadeOut(500)
})

    // show button

let showBtn = $(`.show`)
showBtn.click(function(){
    box.fadeIn(500)
})

 //toggle button

 let toggleBtn = $(`.toggle`)
 toggleBtn.click(function(){
 
     box.fadeToggle(500)
 })


//  SlideUp Button

let slideUpBtn = $(`.slideUp`)
 
slideUpBtn.click(function(){

box.slideUp()

})

// slideDown Button

let slideDownBtn = $ (`.slideDown`)

slideDownBtn.click(function(){

    box.slideDown()
})

// slide toggle button

let toggleSlideBtn = $(`.slideToggle`)

toggleSlideBtn.click(function(){

    box.slideToggle(800)
})
})

   