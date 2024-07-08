let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//pop menu 

// let popup =document.getElementById("popup");

//     function openPopup(){
//         popup.classList.add("open-popup");
//     }
//     function closePopup(){
//         popup.classList.remove("open-popup");
//     }

//stars
const stars =document.querySelectorAll(".stars i");

    stars.forEach((star, index1) => {
        //Add an event listener that runs a w=function when the click event is triggered
        star.addEventListener("click", () => {
            
        //loop through the stars modelist again
            stars.forEach((star, index2) => {
        //add the "active" class to the clicked star and any stars with low index
        //remove the active when clicked 
        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
         });
     });

   


   