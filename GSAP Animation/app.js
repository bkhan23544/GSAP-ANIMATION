
const h = window.innerHeight
const navButton = document.querySelector(".nav-button")
const mouseCursor = document.querySelector(".cursor")
const model = document.querySelector(".model")

window.addEventListener("mousemove",cursor)

function cursor(e){
mouseCursor.style.top = e.pageY+"px"
mouseCursor.style.left = e.pageX+"px"
}

navButton.addEventListener("mouseover",()=>{
    mouseCursor.classList.add('link-grow')
})

navButton.addEventListener("mouseleave",()=>{
    mouseCursor.classList.remove('link-grow')
})

model.addEventListener("mouseover",()=>{
    mouseCursor.classList.add('model-link-grow')
})

model.addEventListener("mouseleave",()=>{
    mouseCursor.classList.remove('model-link-grow')
})


const tl1 = new TimelineMax();
const tl2 = new TimelineMax({paused:true,reversed:true});
var tl3 = new TimelineMax();

tl3.to('.glass', 0.8, {y:50, repeatDelay:0.15, repeat:-1, yoyo:true})
tl3.play();



tl2.
to('.nav-button',1,{
    fontSize:"50px",
    top:"100px",
    left:"29%",
    ease:Power2.easeOut
})
.fromTo('.model',2,{
    display:"none",
    opacity:0,
    y:100,
    backdropFilter:"grayscale()",
    ease:Power2.easeOut
},
{opacity:1, display:"block",
y:"-40%",  backdropFilter:"grayscale()",
ease:Power2.easeOut},'-=1')




tl1.fromTo('.nav-button',1,{
    opacity:0,
    y:0,
    ease:Power2.easeOut
},{
    opacity:1,
    y:-100
})


tl1.fromTo('.filter',2,{
    y:-h,
    ease:Power2.easeOut
},{
    y:0
},'-=1')









navButton.addEventListener('click',(e)=>{
    console.log("clicked")
    if(tl2.isActive()) {
        e.preventDefault()
        e.stopImmediatePropagation()
        return false
    }
    toggleTween(tl2)
})


function toggleTween(tween){
    tween.reversed()?tween.play(): tween.reverse()
}