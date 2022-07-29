// var wrapper = document.querySelector(".chapter"),
//   main = document.querySelector(".chapter-content"),
//   sidebar = document.querySelector(".chapter-sidebar ul");
//   sidebarwrap= document.querySelector(".chapter-sidebar");
// window.onscroll = function () {
//   document
//     .querySelector(".chapter-sidebar ul")
//     .setAttribute(
//       "style",
//       "display:block;width:" +
//       sidebarwrap.offsetWidth +
//         "px"
//     );
//     sidebar.style.width =
//     sidebarwrap.offsetWidth;
//   //if sidebar smaller than main
//   if (sidebar.offsetHeight < main.offsetHeight) {
//     //if sidebar smaller than screen - stick to top rather than bottom
//     if (sidebar.offsetHeight < window.innerHeight) {
//       if (
//         wrapper.getBoundingClientRect().bottom < window.innerHeight &&
//         wrapper.getBoundingClientRect().bottom < sidebar.offsetHeight
//       ) {
//         wrapper.classList.remove("fix-top-VP");
//         wrapper.classList.add("flex-bottom");
//       } else if (wrapper.getBoundingClientRect().top < 0) {
//         wrapper.classList.add("fix-top-VP");
//         wrapper.classList.remove("flex-bottom");
//       } else {
//         wrapper.classList.remove("fix-top-VP");
//         wrapper.classList.remove("flex-bottom");
//       }
//     }
//     //if wrapper taller than sidebar - stick to bottom
//     else if (sidebar.offsetHeight < wrapper.offsetHeight) {
//       if (wrapper.getBoundingClientRect().bottom < window.innerHeight) {
//         wrapper.classList.remove("fix-bottom-VP");
//         wrapper.classList.add("flex-bottom");
//       } else if (
//         wrapper.getBoundingClientRect().bottom >
//         sidebar.offsetHeight + window.innerHeight
//       ) {
//         wrapper.classList.remove("fix-bottom-VP");
//         wrapper.classList.remove("flex-bottom");
//       } else {
//         wrapper.classList.add("fix-bottom-VP");
//         wrapper.classList.remove("flex-bottom");
//       }
//     }
//   }
// };
