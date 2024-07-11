let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.navbar');

let blogscontainer = document.querySelector(".box-container-blog");




let blogs_list =[
    {
        "imgPath":"images/download.jpeg",
        "date": "11th July, 2024",
        "userType":"by admin",
        "heading":"What is cognitive behavioral therapy?",
        "content":"field teaches people to challenge negative thought patterns and turn less often to..... ",
        "link": "https://www.health.harvard.edu/blog/what-is-cognitive-behavioral-therapy-202406053047"
       },
    {
        "imgPath":"images/download(3).jpeg",
        "date": "2nd July, 2024",
        "userType":"by admin",
        "heading":"To post about my mother",
        "content":"Florrie shares this beautiful blog post as she remembers her mum, and urges everyone to hug their loved ones that little bit tighter....",
        "link": "https://letstalkaboutloss.org/2024/05/13/to-post-about-my-mother/"

    },
    {
        "imgPath":"images/download(2).jpeg",
        "date": "5th June, 2024",
        "userType":"by admin",
        "heading":"Things will never be the same",
        "content":"Caitlin shares her thoughts about what she has learnt in the first eight months since she lost her mum. It’s an amazing blog post full",
        "link": "https://letstalkaboutloss.org/2019/03/16/things-will-never-be-the-same-eight-months-of-grief-and-what-is-next/"
       
    },
    {
        "imgPath":"images/download(1).jpeg",
        "date": "10th july, 2024",
        "userType":"by admin",
        "heading":"My depression is legitimate, so why am I ashamed of it?",
        "content":"People know I have depression. With hundreds of followers across Facebook, Twitter and Instagram, and over 1000 unique visitors to....",
       "link": "https://letstalkaboutloss.org/?s=depression+"
    }
];


//display hospital blogs

for(let i=0; i<blogs_list.length; i++){
    let blog_item = `<div class="box">
            <div class="image">
                <img src=${blogs_list[i].imgPath}>
            </div>
            <div class="content">
                <div class="icon">
                    <a href=""><i class="fas fa-calender"></i>${blogs_list[i].date}</a>
                    <a href=""><i class="fas fa-user"></i>${blogs_list[i].userType}</a>
                </div>
                <h3>${blogs_list[i].heading}</h3>
                <p>${blogs_list[i].content}</span></a>
                <a href=${blogs_list[i].link}><button class="btn">Learn More</button></a>
            </div>
        </div>`;

    blogscontainer.insertAdjacentHTML("beforeend", blog_item);

}

//
menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll =() =>{
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
const stars = document.querySelectorAll(".stars i");

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
