let redBtn = document.getElementById("red");
let amarilloBtn = document.getElementById("amarillo");
let verdeBtn = document.getElementById("verde");
let imgchange = document.getElementById("imgchange");


redBtn.onclick = function() {

    imgchange.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/556c4403-5139-4dca-aa7d-a04e47535a7a/d4n670m-bc7b0e75-ea8a-42a0-a379-f5fcfeffd590.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NmM0NDAzLTUxMzktNGRjYS1hYTdkLWEwNGU0NzUzNWE3YVwvZDRuNjcwbS1iYzdiMGU3NS1lYThhLTQyYTAtYTM3OS1mNWZjZmVmZmQ1OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.s1M2Id6ccU6b2_hrnw8QwAQWkpJukyt-jILbtGXAVag";
}

amarilloBtn.onclick = function() {
    imgchange.src = "https://cdn.pixabay.com/photo/2022/08/28/07/03/butterfly-7415822_1280.png";
}

verdeBtn.onclick = function() {
    imgchange.src = "https://i.pinimg.com/originals/7e/49/24/7e4924b45b36ea6398c18641f3a5395f.png";
}
