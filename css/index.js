let right_btn = document.querySelectorAll(".right")
let left_btn = document.querySelectorAll(".left")
let father_scroll = document.querySelectorAll(".scroll-horizontial");
right_btn.forEach(function(ele){
    ele.addEventListener('click' , function(){
        ele.parentElement.scrollBy(100,0);
    })
})
left_btn.forEach(function(ele){
    ele.addEventListener('click' , function(){
        ele.parentElement.scrollBy(-100,0)
    })
})


/* function scrollValue(value,btn){
    if(value === 0){
        console.log("min")
        btn.style.opacity='0';
        setTimeout(function(){
            btn.display='none';
        },500)
    }else if(value === 1613){
        console("max")
        btn.style.opacity='0';
        setTimeout(function(){
            btn.style.display='none';
        },500)
    }else{
        console.log("else")
        btn.style.display='block';
        btn.style.display='block';
        btn.style.opacity='1';
        btn.style.opacity='1';
    }
}
 */

/*

*/