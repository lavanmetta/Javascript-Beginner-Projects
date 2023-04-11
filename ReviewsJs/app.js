const reviews = [
    {
        id: 0,
        name : 'venky Siddampeta',
        job: 'Software Developer',
        image : './img/venky.jfif',
        comment :  "I received this product for free in exchange for a review, and I have to say I'm very impressed. It's amazing and I would definitely recommend it to others."
    },

    {
        id: 1,
        name : 'Bokka subbarao(Bokka)',
        job: 'Software Engineer',
        image : './img/bokka.jpg',
        comment :  "I absolutely love this product! It's amazing and has completely changed my life! I would recommend it to anyone"
    },
    {
        id: 2,
        name : 'Gajala Washington DC',
        job: 'CEO Sonic Solutions',
        image : './img/gajala.jfif',
        comment :  "I received this product for free in exchange for a review, and I have to say Im very impressed. Its amazing and I would definitely recommend it to others. evanni nammavu ante nee face laage adukka tinali"
    }
]


let image = document.getElementById('image');
let name = document.getElementById('name');
let comment = document.getElementById('comment');
let job = document.getElementById('job');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');



let currentReview = 0;

function reviewAssign(currentReview) {
    const item =  reviews[currentReview];
    image.src = item.image;
    name.textContent = item.name;
    job.textContent = item.job;
    comment.textContent = item.comment;
}


/* The below code is adding an event listener to the right button. When the right button is clicked,
the current review is incremented by 1. If the current review is greater than the length of the
reviews array, the current review is set to 0. The reviewAssign function is then called with the
current review as the argument. */

rightBtn.addEventListener('click', function(){
    currentReview++; // 1
    if (currentReview > reviews.length - 1) {  // 1 > 2 true
        currentReview = 0;
    }
    reviewAssign(currentReview);
});

leftBtn.addEventListener('click', function(){
    currentReview--;
   if (currentReview < 0){
    currentReview = reviews.length -1;
   }
    
   reviewAssign(currentReview);
});











