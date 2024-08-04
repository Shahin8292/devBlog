
// responsive header 
const res_btn = document.getElementById('res_btn'),
nav = document.getElementById('nav'),
res_icon = document.getElementById('res_icon');
res_btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    res_icon.classList.toggle('fa-xmark');
});



// search_box
const search_box = document.getElementById('search_box'),
search_btn = document.getElementById('search_btn'),
search_close = document.getElementById('search_close');
const searchBoxToggle =()=>{
    search_box.classList.toggle('active');
}
search_btn.addEventListener('click',searchBoxToggle);
search_close.addEventListener('click',searchBoxToggle);