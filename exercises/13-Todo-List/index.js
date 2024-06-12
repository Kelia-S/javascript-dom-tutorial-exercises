// Your code here
document.querySelectorAll("i.fa-trash").forEach((elem) => {
    
    elem.addEventListener("click", () => {
        elem.parentElement.parentElement.remove();
    })

});

const inp = document.querySelector("input")

inp.addEventListener('keypress', (event) => {
    if (event.code === 'Enter') {
        const li = document.createElement('li');

        li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${inp.value}`;
        document.querySelector('ul').appendChild(li);

        const trash = li.querySelector("i.fa-trash");
        trash.addEventListener('click', () => {
            li.parentElement.parentElement.remove();
        });
        inp.value = '';
    } 
});