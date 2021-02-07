let checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change" , function(){
    document.body.classList.toggle('night');
    document.section.classList.toggle('night');
})
// checkbox.addEventListener("change" , () => {
//     document.body.classList.toggle('night');
//     document.section.classList.toggle('night');
// })