// img
const bookimg = [
  "book9",
  "book8",
  "book7",
  "book6",
  "book5",
  "book4",
  "book3",
  "book2",
  "book1",
];

//nav
function navclick() {
  let x = document.querySelector(".menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

// 分隔
let tech = document.querySelector(".tech");
let tech_img = document.querySelectorAll(".tech-img");
for (let i = 0; i < tech_img.length; i++) {
  tech_img[i].src = "images/" + bookimg[i] + ".jpg";
}

//about
let achievements_item = document.querySelectorAll(".achievements-item");

// achievements

const ac = [
  {
    title: " Copies Sold",
    var1: "948",
    val: "948",
  },
  {
    title: " Copies Released",
    var1: "1,034",
    val: "1034",
  },
  {
    title: "Cup Of Coffee",
    var1: "293",
    val: "893",
  },
  {
    title: "  Happy Readers",
    var1: "5,342",
    val: "1342",
  },
];
//利用class="section-center"去抓取食物清單的div元素
const achievements = document.querySelector(".achievements");

//圖片文字部分:新增displayMenuItems()函式 : 在畫面顯示出食物清單
function displayMenuItems(menuItems) {
  //新增displayMenu陣列 : 儲存食物清單表現方式
  let displayMenu = menuItems.map(function (item) {
    return `
         <div class="achievements-wrap">
         <div class="achievements-item">
             <strong class="num" data-val="${item.val}">${item.var1}</strong>
             <span>${item.title}</span>
         </div>
     </div>
    `;
  });

  displayMenu = displayMenu.join("");
  achievements.innerHTML = displayMenu;
}
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(ac); //預設顯示所有內容

  // 動態數字
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 2000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
});

//chapter

// window.addEventListener("scroll", function position() {
//   let mainscroll = document.querySelector(".chapter");
//   let rect1 = mainscroll.getBoundingClientRect();
//   console.log(rect1.top);
//   console.log(rect1.bottom);

  // let sidebar = document.querySelector(".chapter-sidebar");
  // let rect = sidebar.getBoundingClientRect();

  // if sidebar 
// });
