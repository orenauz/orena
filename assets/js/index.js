"use strick";
// variables
let bars = document.querySelector("#bar");
let rwd_navbar = document.querySelector(".rwd_navbar");
let close_rwd_nav = document.querySelector(".close");
let body = document.querySelector("body");
let last_news__ = document.querySelector(".last_news")
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
// take lastest news
 
window.addEventListener("load", () => {
    fetch("./orenauzpanel/beckend/beckend.php?do=takeLastestNews").then((res) => res.json()).then((data) => {
        let arr = data.result;
        arr.forEach(element => {
            // filter
            localStorage.setItem("usedForLastest", `${element.id}`);
            last_news__.innerHTML = `
            <div class="news_big_card" style="background-image: url('./orenauzpanel/uploads/${element.file_name}')">
                <div class="backdropp"></div>
                <div class="news_image">
                    <img src="./assets/images/news_image.jpg" alt="">
                </div>
                <div class="news_body">
                    <a href="./categories/news.html?id=${element.id}" class="news_title">
                        ${element.news_title}
                    </a>
                    <p class="time">
                        ${element.date_news}
                    </p>
                </div>
            </div>
            `
        });
    })
})

// take lastest 3 news
let screenWidth = screen.width;
let used_id_for_lastest = localStorage.getItem('usedForLastest');
if(screenWidth <= 768){
    window.addEventListener("load", () => {
        fetch("./orenauzpanel/beckend/beckend.php?do=get3news").then((res) => res.json()).then((data) => {
            let arr = data.result;
            let i = 0;
            arr.forEach(element => {
                if(i < 7){
                    if(element.id !== used_id_for_lastest){
                        last2.innerHTML += `
                        <div class="news_card">
                            <div class="news_image">
                                <img src='./orenauzpanel/uploads/${element.file_name}' style="width:100%;">
                            </div>
                            <div class="news_body">
                                <div class="newsType">
                                    <span>${element.news_type}</span>
                                </div>
                                <h4 class="news_text align-left">
                                    <a href="./categories/news.html?id=${element.id}">${element.news_title.slice(0,71)}...</a>
                                </h4>
                                <p class="time">${element.date_news}</p>
                            </div>
                        </div>
                        `
                    }
                }
                i++;
            });
        })
    })
} else {
    window.addEventListener("load", () => {
        fetch("./orenauzpanel/beckend/beckend.php?do=get3news").then((res) => res.json()).then((data) => {
            let arr = data.result;
            let i = 0;
            arr.forEach(element => {
                if(i < 4){
                    if(element.id !== used_id_for_lastest){
                        last2.innerHTML += `
                        <div class="news_card">
                            <div class="news_image">
                                <img src='./orenauzpanel/uploads/${element.file_name}' style="width:100%;">
                            </div>
                            <div class="news_body">
                                <div class="newsType">
                                    <span>${element.news_type}</span>
                                </div>
                                <h4 class="news_text align-left">
                                    <a href="./categories/news.html?id=${element.id}">${element.news_title.slice(0,71)}...</a>
                                </h4>
                                <p class="time">${element.date_news}</p>
                            </div>
                        </div>
                        `
                    }
                }
                i++;
            });
        })
    })
}


// get all
 
window.addEventListener("load", () => {
    fetch("./orenauzpanel/beckend/beckend.php?do=getAllNews").then((res) => res.json()).then((data) => {
        let arr = data.result;
        arr.forEach(element => {
            news_container.innerHTML += `
            <div class="news_card">
                    <div class="card_top">
                        <img src="./orenauzpanel/uploads/${element.file_name}" alt="News image">
                    </div>
                    <div class="card_body">
                        <p class="time">${element.date_news}</p>
                        <p class="title_news">
                            <a href="./categories/news.html?id=${element.id}">${element.news_title}</a>
                        </p>
                    </div>
                </div>

            `
        });
    })
})
