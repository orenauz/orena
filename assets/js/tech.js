let lastest = document.querySelector("#lastest_ins_");
let last = document.querySelector("#last_news_card")

window.addEventListener('load', ()=>{
    fetch("../orenauzpanel/beckend/beckend.php?do=getRandomTech").then((res)=>res.json()).then((data)=>{
        let arr = data.result
        console.log(data);
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
    fetch("../orenauzpanel/beckend/beckend.php?do=getTech").then((res)=>res.json()).then((data)=>{
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