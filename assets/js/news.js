"use strick";
// variables
let news_container = document.querySelector(".show_news_container");
const title = document.querySelector('title')
// get news id
const current_url = window.location.href;
const params = (new URL(current_url)).searchParams;
const getDo = params.get('id');
window.addEventListener("load", ()=>{
    fetch(`../../orenauzpanel/beckend/beckend.php?do=moreNews&id=${getDo}`).then((res)=>res.json()).then((data)=>{
        let news = data.result;
        if(data.ok !== true && data.code !== 200){
            window.location.href = "../"
        } else {
            news.forEach(e => {
                news_container.innerHTML = `
                <div class="main">
                        <div class="news_media">
                            <img src="../orenauzpanel/uploads/${e.file_name}" alt="News image">
                        </div>
                        <div class="news_title">
                            <p>
                                ${e.news_title}
                            </p>
                        </div>
                        <div class="news_description">
                            <p>
                              ${e.text}
                            </p>
                        </div>
                   </div>
                `
                title.innerHTML = `Orena.uz | ${e.news_title}`
            });
        }
    })
})
// navbar
let bars = document.querySelector("#bar");
let rwd_navbar = document.querySelector(".rwd_navbar");
let close_rwd_nav = document.querySelector(".close");
let body = document.querySelector("body");
let last_news = document.querySelector(".last_news")
let last2 = document.querySelector("#last3")
// navbar 
bars.addEventListener("click", () => {
    rwd_navbar.classList.toggle("show_red_nav")
    body.classList.toggle("hidedingcontent")
})
close_rwd_nav.addEventListener("click", () => {
    rwd_navbar.classList.remove("show_red_nav")
    body.classList.remove("hidedingcontent")
})