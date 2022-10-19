"use stick";
let lastest = document.querySelector("#lastest_ins");
let last = document.querySelector(".last_news")
console.log(123)
window.addEventListener('load', ()=>{
    fetch("../orenauzpanel/beckend/beckend.php?do=getInsayder").then((res)=>res.json()).then((data)=>{
        let arr = data.result
        arr.forEach((e)=>{
            lastest.innerHTML = `
            <div class="lastest_news" style="background-image: url('../orenauzpanel/uploads/${e.file_name}')">
                <div class="back_drop"></div>
                <div class="text">
                    <a href="../categories/news.html?id=${e.id}">${e.news_title}</a>
                    <p>${e.date_news}</p>
                </div>
            </div>
        `
        })
    })
})
window.addEventListener('load', ()=>{
    fetch("../orenauzpanel/beckend/beckend.php?do=getInsayder").then((res)=>res.json()).then((data)=>{
        let arr = data.result
        arr.forEach((e)=>{
            last.innerHTML += `
            <div class="news_card">
                <div class="news_image">
                    <img src="../orenauzpanel/uploads/${e.file_name}" alt="News image">
                </div>
                <div class="News_body">
                    <a href="../categories/news.html?id=${e.id}">${e.news_title}</a>
<!--                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea aspernatur quos id amet eveniet vitae officia consequatur quasi repellendus praesentium quia</p>-->
                    <span>${e.date_news}</span>
                </div>
            </div>
        `
        })
    })
})

//navbar
// variables
let bars = document.querySelector("#bar");
let rwd_navbar = document.querySelector(".rwd_navbar");
let close_rwd_nav = document.querySelector(".close");
let body = document.querySelector("body");
let last_news = document.querySelector(".last_news")
let last2 = document.querySelector("#last3")
let news_container = document.querySelector("#news_container")
// navbar
bars.addEventListener("click", () => {
    rwd_navbar.classList.toggle("show_red_nav")
    body.classList.toggle("hidedingcontent")
})
close_rwd_nav.addEventListener("click", () => {
    rwd_navbar.classList.remove("show_red_nav")
    body.classList.remove("hidedingcontent")
})
// search
let open_search = document.querySelector("#open_search");
let search = document.querySelector("#search");
open_search.addEventListener("click", () => {
    event.preventDefault();
    search.classList.toggle("open")
    open_search.classList.toggle("config")
})
