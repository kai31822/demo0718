// img
const mybooks = [
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
  
  let book_img = document.querySelectorAll(".books");
  for (let i = 0; i < book_img.length; i++) {
    book_img[i].style.background = `url("/images/${mybooks[i]}.jpg")`;
    book_img[i].style.backgroundSize = "cover";
  }

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
