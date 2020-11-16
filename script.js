const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');

// add element
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    item.value ='';
})

// remove element
list.addEventListener('click', (e)=>{
    if (e.target.classList.contains('checked')) {
        e.target.remove();
    } else{
        e.target.classList.add('checked');
    }
})