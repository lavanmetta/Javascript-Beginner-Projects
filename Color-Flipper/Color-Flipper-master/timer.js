const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Gray", "tomato"];


const btn = document.getElementById('click');
let color = document.querySelector('.color');
const timer = document.querySelector('.timer');

btn.addEventListener('click', function() {
    let num = 0
   
    const intervalId = setInterval(function() {
        num += 1
        
        if (num === colors.length) {
            clearInterval(intervalId)
            document.body.style.backgroundColor = 'white'; 
            
        }
        const msg = "ended"

        timer.textContent = num
        color.textContent = colors[num] || msg
        document.body.style.backgroundColor = colors[num]; 

    },1000)

    
   

})

