const projectsToggleBtn = document.querySelector('.projects-toggle-btn');
const projectWrappers = document.querySelectorAll('.card-wrapper');


const overviews = document.querySelectorAll('.card .overview');
function checkIfParaSmallThanContainer(){
    overviews.forEach(overview =>{
        const paraHeight = overview.children[0].offsetHeight;
        const containerHeight = overview.offsetHeight;
        if(paraHeight < containerHeight){
            overview.nextElementSibling.style.display = 'none';
            overview.classList.add('expand');
        }
    })
    
}


projectsToggleBtn.addEventListener('click',() => {
    window.scrollBy(0,1);
    projectsToggleBtn.classList.toggle('toggle');
    projectWrappers.forEach(wrapper => wrapper.classList.toggle('show') );
    checkIfParaSmallThanContainer();
});

function removeAnimationFromTopCards(projectWrapper){
    const card1Distance = getDistanceFromTop(projectWrapper.children[0]);
    var distanceFromTop;

    for(const card of projectWrapper.children){
        distanceFromTop = getDistanceFromTop(card);
        console.log('card distance :'+distanceFromTop+" first card : "+card1Distance);
        if(distanceFromTop === card1Distance){
            card.children[0].setAttribute('data-scroll', 'in');
        }
    }
}

function getDistanceFromTop(el) {
    var rect = el.getBoundingClientRect();
    return rect.top;
}


var paraHeight;
var paragraphContainer;
const expandButtons = document.querySelectorAll('.read-more');

var expanded = false;

expandButtons.forEach((button)=>{
    button.addEventListener('click',()=>{

        paragraphContainer = button.parentElement.querySelector('.overview');
    
        paragraphContainer.classList.toggle('expand');
        paraHeight= paragraphContainer.children[0].offsetHeight;
    
        if(!expanded){
            paragraphContainer.style.height=paraHeight+25+'px';
            expanded=true;
        } else{
            expanded=false;
            paragraphContainer.style.height=4.2+'rem';
        }
    
    
        if(button.innerText === '...read more'){
            button.innerText = 'read less';
        } else{
            button.innerText = '...read more';
        }
    

    })
})


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove:true,
    effect:"cards",
    grabCursor:true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });