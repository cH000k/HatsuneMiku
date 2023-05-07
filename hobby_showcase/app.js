const btn = document.querySelector('#submit');
const ul = document.querySelector('#my-list');
const input = document.querySelector('input');

// btn.addEventListener("click", (e) => {
//     const newLi = document.createElement('li');
//     newLi.innerText = input.innerText;
//     ul.appendChild(newLi)
//     e.preventDefault();
// })

btn.addEventListener("click", (e) => {
    
    console.log(input.innerText);
    e.preventDefault();
})