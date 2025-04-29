

function show(event){
    
     var preview = document.querySelector('.view');
     var inp = event.target.closest('.main').querySelector('.input');  // Make sure to use '.input' class instead of 'input' (input is an HTML element)
     var title = inp.querySelector('h1').innerText;
     var p = inp.querySelector('p');
     var img= event.target.closest('.main').querySelector('img');
     var over = document.querySelector('.over')
 
     preview.style.top = "50%";
     preview.innerHTML = `
     <button class="close" onclick="clos()">×</button>
     <center>
         
         <h1>${title}</h1>
         <p>${p.innerText}</p>
     </center>
     `;

    
     preview.style.backgroundSize = `cover`
     over.style.display = "block"
 }


 function clos(){
    
    var over = document.querySelector('.over')
    var menu=document.querySelector('.menu');
     var preview = document.querySelector('.view');
     preview.style.top = "-60%"
     over.style.display = "none"
     menu.style.left = "-60%"
 }

 



 function search() {
    var input = document.getElementById('search').value.toLowerCase();  // make it case-insensitive
    var divs = document.querySelectorAll('.main');  // Get all .main divs

    for (var i = 0; i < divs.length; i++) {
        var p = divs[i].querySelector('p').innerText.toLowerCase();  // Get the text of the p inside each .main div

        if (p.includes(input)) {
            divs[i].style.display = 'block';  // Show the div if it matches
        } else {
            divs[i].style.display = 'none';  // Hide the div if it doesn't match
        }
    }
}

function clar(){
    
    var input = document.getElementById('search');
    input.value = ""
    search()
}

function menuOpen(){
  
    var menu=document.querySelector('.menu');
    menu.style.left = "0"
    var over = document.querySelector('.over')
    over.style.display = "block"
}

let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const slideContainer = document.querySelector('.slides');
    const totalSlides = slides.length;
    const counterText = document.getElementById('imageCounter');

    document.querySelector('.next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    });

    function updateSlide() {
      slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      counterText.textContent = `Image ${currentIndex + 1} of ${totalSlides}`;
    }

    // Initialize on load
    updateSlide();

 
