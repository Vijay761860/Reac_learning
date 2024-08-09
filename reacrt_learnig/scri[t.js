const Basket_1 = document.querySelector('.Basket-1 span')
const Basket_2 = document.querySelector('.Basket-2 span')
const right_arrow = document.querySelector('.right-arrow')
const  left_arrow = document.querySelector('.left-arrow')

// const totalapple = prompt("enter you number");
const totalapple = 20;
let secoundbasketapple =0
let firstbasketapple = totalapple - secoundbasketapple

// right arrow 
right_arrow.addEventListener('click' , () =>{
    if(firstbasketapple >0){

        firstbasketapple--
        secoundbasketapple++
        Basket_1.innerText = firstbasketapple
        
        Basket_2.innerText = secoundbasketapple
    }
})

// lett arrow 
left_arrow.addEventListener('click' , () =>{
    if(secoundbasketapple >0){

        firstbasketapple++
        secoundbasketapple--
        Basket_2.innerText = secoundbasketapple
        Basket_1.innerText = firstbasketapple
    }

})