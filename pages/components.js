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


window.onload=toggle;
function toggle(){
    setTimeout(()=> {
        document.body.classList.add('loaded')
        window.scrollBy(0,1);
    },100);

    setTimeout(checkIfParaSmallThanContainer,1000);

};


//Render text like a typewriter
function typeText(text){
    const textToType = text.innerText;
    text.innerHTML = '';
    text.style.opacity = 1;
    var counter=0;
    var finalText='';
    
    const typing = setInterval(()=>{
        if(counter<textToType.length){
            finalText = textToType.slice(0,counter+1);
            text.innerHTML = finalText;
            counter++;
        } else{
            clearInterval(typing);
        }
    },100);
}

ScrollOut({
    once:true
});


const headingTexts = document.querySelectorAll('.section-heading h2');
headingTexts.forEach((text)=>{
    setTimeout(()=> 
    typeText(text)
    , 500)
})