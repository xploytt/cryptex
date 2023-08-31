
const NAV_TOGGLER = document.getElementById("nav-toggler")
const firstSection = document.getElementById("first-sec")
const header = document.querySelector("#header-container")
const _tagHeader = document.getElementsByTagName("header")[0]
const _activeViewport = document.querySelectorAll(".viewport-visibility")
 
function scrollE(){
    scrollY >= 240 ? _tagHeader.classList.add("fixed-state") : 
    _tagHeader.classList.remove("fixed-state")


    Array.from(_activeViewport).forEach(function(item){
            if (item.getBoundingClientRect().top < window.innerHeight / 1.5){
                item.dataset.viewport = "active"
            }else{
                item.dataset.viewport = ""
            }     
    })
}
scrollE()

let _main_hidden = false
NAV_TOGGLER.addEventListener("click", function(){
    _main_hidden = _main_hidden === false ? true : false 
    let _main = document.getElementsByTagName("body")[0]

    function main_hidden(){
        _main.classList.toggle("hidden")
    }
    
    _main_hidden === true ? setTimeout(main_hidden, 500) : _main.classList.remove("hidden") 
    
    _value = ROOT_DIV.getAttribute("data-navbar")
    _value = _value === "true" ? "false" : "true"
    
    ROOT_DIV.setAttribute("data-navbar", _value)
    
})
const ROOT_DIV = document.getElementById("root")

addEventListener("scroll", scrollE)
