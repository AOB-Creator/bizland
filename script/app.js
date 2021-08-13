function loading(){
    const slicker = document.querySelector(".slicker")

    setTimeout(function(){
        slicker.classList.add("none")
    }, 3000)
}

loading()
// loadding// loadding// loadding// loadding// loadding// loadding



const headnav = document.querySelector(".headnav")

function navireducer(){
    const navi = document.querySelector(".navi");
    navi.classList.remove("navibig");
    navi.classList.add("navimin");
    
}
function navibigger(){
    const navi = document.querySelector(".navi");
    navi.classList.add("navibig");
    navi.classList.remove("navimin");
    
}

window.addEventListener("scroll", (event)=>{

        if(window.scrollY>40){
            navireducer()          
            
        }else{
            
            navibigger()
        }
    
})


const menus = document.querySelectorAll(".menu a")
function currenter(){
    const menus = document.querySelectorAll(".menu a")
    menus.forEach(item=>{
        item.classList.remove("current")
    })
}
menus.forEach((item, index)=>{
    item.addEventListener("click", function(){
        currenter()
        item.classList.add("current")
    })
})


const text4info = document.querySelectorAll(".text4 span")
const datamap = ["Html", "100%", "Css3","80%" ,"JavaScript","65%","Bootstrap", "85%","Node JS", "55%", "React Js", "70%"]

text4info.forEach((item, index)=>{
    if(index%2==0){
        item.textContent = datamap[index]
        
    }
    else{
        item.textContent = datamap[index]
    }
})


const line4 = document.querySelector(".tops4 .text4+div")



    
    const smileh2 = document.querySelectorAll(".card4 h2")
    const smileh3 = document.querySelectorAll(".card4 h3")
    const smilicon = document.querySelectorAll(".card4 i")


const datasmile = [["fa-smile",235,"Happy Clients"],["fa-code",65,"Project"],["fa-file",2135,"Hours of Support"],["fa-file-code", 23 ,"Hard Workers"]]


datasmile.forEach((item, inde)=>{
    
    
    smilicon[inde].classList.add(item[0]);
    smileh2[inde].textContent = item[1];
    smileh3[inde].textContent = item[2];
    
    
    })


const cards6 = document.querySelectorAll(".cards6 .card6")

const  cards6i= document.querySelectorAll(".cards6 .card6 i")
const cards6h3 = document.querySelectorAll(".cards6 .card6 h3")
const cards6h5 = document.querySelectorAll(".cards6 .card6 h5")

const data6 = [
    ["fa-broadcast-tower", "App Store", "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"],
    ["fa-ban", "Sed ut perspiciatis", "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"],
    ["fa-bezier-curve", "Network", "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"],
    ["fa-biohazard", "Nemo Enim", "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"],
    ["fa-border-all", "Dele cardo", "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"],
    ["fa-broadcast-tower", "Divera don", "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"]
]

cards6.forEach((item,index)=>{
    cards6i[index].classList.add(data6[index][0])
    cards6h3[index].textContent=data6[index][1]
    cards6h5[index].textContent=data6[index][2]
})















window.addEventListener("scroll", function(){
    const scroly = window.scrollY
    if(scroly>=0 && scroly<884){
        currenter()
        menus[0].classList.add("current")
    }
    else if(scroly>853 && scroly<1714){
        currenter()
        menus[1].classList.add("current")
    }
    else if(scroly>=1715 && scroly<2514){

    }
})


const titlebutton = document.querySelectorAll(".head8")
const hids = document.querySelectorAll(".covered")
const iconsup = document.querySelectorAll(".head8>i")


function removeicon (){
    iconsup.forEach(item=>{
        item.classList.remove("iconky")
    })
}

function removerCover(){
    hids.forEach(item=>{
        item.classList.remove("coveract")
    })    
}

titlebutton.forEach((item, index)=>{
    item.addEventListener("click", function(){
        removerCover()
        removeicon()
            hids[index].classList.toggle("coveract")
            iconsup[index].classList.add("iconky")
        
        
    })
})



const checked = document.querySelector("#switch1")
const section9 = document.querySelector(".section9")

const onpage = document.querySelector(".on_page")
const offpage = document.querySelector(".off_page")

checked.addEventListener("click", ()=>{
    
})

checked.addEventListener("click", function(){
    section9.classList.toggle("mode9")
    onpage.classList.toggle("none9")
    offpage.classList.toggle("none9")
})
