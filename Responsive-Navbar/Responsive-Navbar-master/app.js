const hamBurgerBtn = document.getElementById('btn');
const  links = document.getElementById('links');







hamBurgerBtn.addEventListener('click', function() {

    links.classList.toggle('mobile')
   
    hamBurgerBtn.classList.toggle("ri-menu-unfold-fill")

    
})