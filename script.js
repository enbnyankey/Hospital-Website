let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.navbar');

let blogscontainer = document.querySelector(".box-container-blog");


let blogs_list =[
    {
        "imgPath":"images/download (2).jpeg",
        "date": "2nd July, 2024",
        "userType":"by admin",
        "heading":"blog title goes here",
        "content":"field"
    },
    {
        "imgPath":"images/download (2).jpeg",
        "date": "2nd July, 2024",
        "userType":"by admin",
        "heading":"wryjwryjwryj",
        "content":"xfghjerjetr"
    },
    {
        "imgPath":"images/download (2).jpeg",
        "date": "2nd July, 2024",
        "userType":"by admin",
        "heading":"wryjwryjwryj",
        "content":"xfghjerjetr"
    },
    {
        "imgPath":"images/download (2).jpeg",
        "date": "2nd July, 2024",
        "userType":"by admin",
        "heading":"wryjwryjwryj",
        "content":"xfghjerjetr"
    }
];


//display hospital blogs

for(let i=0; i<blogs_list.length; i++){
    let blog_item = `<div class="box">
            <div class="image">
                <img src="images/download (2).jpeg" alt="">
            </div>
            <div class="content">
                <div class="icon">
                    <a href=""><i class="fas fa-calender"></i>2nd July, 2024</a>
                    <a href=""><i class="fas fa-user"></i>by admin</a>
                </div>
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sit iure dicta nesciunt corrupti minus soluta odio ullam iste labore distinctio consequuntur sunt laboriosam aut dolorum ratione tempora rerum mollitia.</p>
                <a href="#" class="btn">learn more <span class="fas fa-chevron-right"></span></a>
            </div>
        </div>`;

    blogscontainer.insertAdjacentHTML("beforeend", blog_item);

}


menu.onclick =()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// pop menu 

let popup = document.getElementById("popup");

    function openPopup(){
        popup.classList.add("open-popup");
    }
    function closePopup(){
        popup.classList.remove("open-popup");
    }

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

   


   