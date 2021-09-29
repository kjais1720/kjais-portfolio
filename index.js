const animatedText=document.querySelectorAll(".animatedText")
const nav = document.querySelector("nav")
const navToggle = document.querySelector('.hamburger')

navToggle.addEventListener('click',()=>{
    nav.classList.toggle('active')
    navToggle.classList.toggle('is-active')
});

var prevScrollPos = window.pageYOffset;


window.onscroll = ()=>{

    navToggle.classList.remove('is-active')
    nav.classList.remove("active")

    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos > 200){
        nav.classList.add("showBg");
    }
    else{
        nav.classList.remove("showBg");
    }
    if (prevScrollPos > currentScrollPos){
        nav.style.top='0'
    } else {
        nav.style.top='-200px';
    }
    prevScrollPos = currentScrollPos
}



animatedText.forEach(text =>{
    text.innerHTML = text.innerText
            .split('')
            .map((letter,idx) => `<span style="transition-delay:${idx * 100}ms;">${letter}</span>`)
            .join('');
    })



window.onload=toggle;
function toggle(){
    setTimeout(()=>{
        document.body.classList.add('loaded');
        // animatedText[0].classList.add('active');
        setTimeout(()=>{
            animatedText.forEach(e=>{
                    e.classList.add('active');
                })
        },400);
    },200);
    
};



ScrollOut({
    once:true,
    threshold:0.4
});




// function scrollAnimation(){
//     const animatedContainers = document.querySelectorAll('[data-scroll]');
//     console.log(animatedContainers);
// }