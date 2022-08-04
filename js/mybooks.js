// img
const mybooks = [
    "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1543497415-75c0a27177c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "book1",
  ];
  
  let book_img = document.querySelectorAll(".books");
  for (let i = 0; i < book_img.length; i++) {
    book_img[i].style.background = `url("${mybooks[i]}")`;
    book_img[i].style.backgroundSize = "cover";
  }

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
