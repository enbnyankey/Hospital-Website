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
                <a href=${blogs_list[i].link}><button class="btn">Read More</button></a>
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

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4pw4jAM5yqsn9rrmhXYoB5w8ErrKVOQtyrpP8uqmn2TPusVQouF-EZ5uCgSom_T8pPQ/exec'
     const form = document.forms['submit-to-google-sheet']
     const msg = document.getElementById("msg")
   
     form.addEventListener('submit', e => {
       e.preventDefault()
       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
         .then(response =>{
             msg.innerHTML = "Mesaage sent Successfully"
             setTimeout(function(){
                 msg.innerHTML=""
             }, 5000)
             form.reset()
         })
         .catch(error => console.error('Error!', error.message))
     })


// ///Therapist reviews
//      let reviewcontainer = document.querySelector(".box-container-review");



//      let review_list =[
//         {
//             "imgPath":"images/R.jpeg",
//             "name": "Dr. Emmanuel hope",
//             "content":"Dr.Hopeson has been recognized as one of the best psychologist in the clinic over a few years  now. He's been acknowledged as the best in this year and the previous year. His hardwork and perseverance towards this has gain and earned him this postion"
            
//         },
//         {
//             "imgPath":"images/samuel-banner-2-1.jpg",
//             "name": " Dr. Samuel Ato Bentil",
//             "content":"Dr.samuel has been recognized as one of the best psychologist in the clinic over a few years  now. He's been acknowledged as the best in this year and the previous year. His hardwork and perseverance towards this has gain and earned him this postiond"
            
//         },
//         {
//             "imgPath":"images/OIP (2).jpeg",
//             "name": "Dr. Yao Azumah",
//             "content":"Dr.Yao has been recognized as one of the best psychologist in the clinic over a few years  now. He's been acknowledged as the best in this year and the previous year. His hardwork and perseverance towards this has gain and earned him this postion"
            
//         },
//         {
//             "imgPath":"images/OIP(1).jpeg",
//             "name": "Dr. Ephraim Addo",
//             "content":"Dr.Ephraim has been recognized as one of the best psychologist in the clinic over a few years  now. He's been acknowledged as the best in this year and the previous year. His hardwork and perseverance towards this has gain and earned him this postion"
            
//         }

        
//      ];



//      for(let i=0; i<review_list.length; i++){
//         let review_item = `<div class="box">
//             <img src=${review_list[i].imgPath}>
//                 <h3>${review_list[i].name}</h3>
//             <div class="stars">
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//                 <i class="fas fa-star"></i>
//             </div>
//             <p class="text">${review_list[i].content}</div>`;
    
//        reviewcontainer.insertAdjacentHTML("beforeend", review_item);

       
    
//     }
// //stars
// Select all containers that have the stars
const starContainers = document.querySelectorAll(".stars");

starContainers.forEach(container => {
    // Select all stars within the current container
    const stars = container.querySelectorAll("i");

    stars.forEach((star, index1) => {
        // Add an event listener that runs a function when the click event is triggered
        star.addEventListener("click", () => {
            // Loop through the stars NodeList again
            stars.forEach((star, index2) => {
                // Add the "active" class to the clicked star and any stars with lower index
                // Remove the "active" class from other stars
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });
});


    //doctors

    //  let doctorscontainer = document.querySelector(".box-container-doctors");
