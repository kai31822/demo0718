 //顯示圖片下標
 let index = 0
 // 圖片數量
 let images = document.querySelectorAll('.carousel .carouselwrap img').length;

 const botton = document.querySelector('.carousel .botton');
 for (let i = 0; i < images.length; i++) {
   創建底部按鈕
   const indicator = document.createElement('div');
   indicator.classList.add('indicator');
   indicator.onclick = () => setIndex(i);
   botton.append(indicator);
 }
 // 自動滾動

 function createAuto() {
   return setInterval(() => {
     index++;
     refresh();
   }, 3000);
 }
 let autoTimer = createAuto();

 function refresh() {
   if (index < 0) {
     // 下標小於0時    設置最右邊的圖片
     index = images - 1
   } else if (index > images - 1) {
     // 下標超過上限時    設置最左邊的圖片
     index = 0
   }

   // 獲取元素
   let carousel = document.querySelector('.carousel');
   //獲取輪播框的寬度
   let width = getComputedStyle(carousel).width;
   width = Number(width.slice(0, -2));
   // console.log(width);
   carousel.querySelector('.carouselwrap').style.left = index * width * -1 + "px";
 }
 // refresh裝飾器
 let refreshWrapper = (func) => {
   return function (...args) {
     let result = func(...args);
     refresh();

     // 重製自動滾動
     clearInterval(autoTimer);
     autoTimer = createAuto();
     return result

   }
 }


 // 左
 let leftshift = refreshWrapper(() => {
   index--

 })
 // 右
 let rightshift = refreshWrapper(() => {
   index++

 })
 // 點選時
 let setindex = refreshWrapper((idx) => {
   index = idx

 })
 // 整理
 refresh()