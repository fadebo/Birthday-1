document.addEventListener('DOMContentLoaded', function() {
    const celebrateBtn = document.getElementById('celebrateBtn');
    const slideshow = document.getElementById('slideshow');
    const audio = new Audio('Uches_Milestone.mp3');

    const slideshowContent = [
        { type: 'image', src: 'image1.jpg' },
        { type: 'image', src: 'image2.jpg' },
        { type: 'image', src: 'image3.jpg' },     
        { type: 'video', src: 'video1.mp4' },
        { type: 'image', src: 'image4.jpg' }
        
    ];
    let currentContentIndex = 0;
    let slideshowInterval;

    function showNextContent() {
        const content = slideshowContent[currentContentIndex];
        let element;

        if (content.type === 'image') {
            element = document.createElement('img');
            element.src = content.src;
        } else if (content.type === 'video') {
            element = document.createElement('video');
            element.src = content.src;
            element.autoplay = true;
            element.muted = true;
            element.loop = true;
        }

        element.style.display = 'block';
        slideshow.innerHTML = '';
        slideshow.appendChild(element);
        currentContentIndex = (currentContentIndex + 1) % slideshowContent.length;
    }

    function startSlideshow() {
        showNextContent();
        slideshowInterval = setInterval(showNextContent, 5000);  // Changed to 5 seconds to allow video to play longer
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    celebrateBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            startSlideshow();
            celebrateBtn.innerHTML = '<i class="fas fa-pause me-2"></i>Pause';
        } else {
            audio.pause();
            stopSlideshow();
            celebrateBtn.innerHTML = '<i class="fas fa-birthday-cake me-2"></i>Celebrate!';
        }
    });

    // Snow effect
    const snow_fall_rate = 4;
    function snow() {  
        var b = document.createElement('div');
        var size = (Math.random()*10) + 5;
        b.className = 'flake';
        b.style.width = size + 'px';
        b.style.height = size + 'px';
        b.style.left = Math.random()*window.innerWidth + 'px';
        b.style.top = '-20px';
        b.style.opacity = '.5';  
        b.style.filter = Math.random() < .5 ? 'blur(3px)' : 'blur(1px)';
        b.style.transition = Math.random < .5 ? snow_fall_rate*.75 + 's' : snow_fall_rate + 's';
        b.style.transitionTimingFunction = 'ease-in';
        document.body.appendChild(b);
        setTimeout(function(){
            var flakes = document.querySelectorAll('.flake');
            var flake = flakes[flakes.length - 1];  
            var flake_loc = flake.getBoundingClientRect();
            flake.style.top = '105%';
            flake.style.left = Math.random() < .5 ? flake_loc.left - 150 + 'px' : flake_loc.left + 150 + 'px';
        },10);  
        var flakes = document.getElementsByClassName('flake');
        for(var i=0;i<flakes.length;i++){
            if(flakes[i].getBoundingClientRect().top > window.innerHeight) {
                flakes[i].remove();
            }      
        }
        setTimeout(function(){ snow() },200);
    }
    snow();

    // Bouncing birthday wishes
    const wishes = [
        "Happy Birthday!", 
        "Make a wish!", 
        "You're a star!", 
        "Shine bright!", 
        "Dream big!",
        "Stay magical!",
        "You're amazing!",
        "Keep smiling!",
        "Party time!",
        "Enjoy your day!"
    ];

    function addBirthdayWish() {
        const wish = document.createElement('div');
        wish.className = 'birthday-wish';
        wish.textContent = wishes[Math.floor(Math.random() * wishes.length)];
        wish.style.left = Math.random() * window.innerWidth + 'px';
        wish.style.top = Math.random() * window.innerHeight + 'px';
        document.getElementById('birthday-wishes').appendChild(wish);

        setTimeout(() => {
            wish.remove();
        }, 5000);
    }

    setInterval(addBirthdayWish, 2000);
});