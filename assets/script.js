const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots = document.querySelector('.dots');
const imgcarrousel = document.querySelector('.banner-img');
let actifIndex = 0;

slides.forEach((slide,actifIndex) => {
	const tag = document.createElement('div');
	tag.classList.add('dot')
	dots.appendChild(tag)
})

const dot = document.querySelectorAll('.dot');

arrow_left.addEventListener("click",function(){
	actifIndex--;
	carrousel(actifIndex, 'left')
});


arrow_right.addEventListener("click",function(){
	actifIndex++;
	carrousel(actifIndex, 'right')
});

function carrousel(index = actifIndex, direction = 'démarrage') {

	if (actifIndex === -1 && direction === 'left') {
		actifIndex = slides.length - 1;
	} 
	if (actifIndex === slides.length && direction === 'right') {
		actifIndex = 0;
	}
	
	const imgSlide = `assets/images/slideshow/${slides[actifIndex].image}`;
	imgcarrousel.src = imgSlide;
	
	const txtSlide = slides[actifIndex].tagLine;
	document.querySelector('p').innerHTML = txtSlide;

	dot.forEach((dot, i) => {
		if (i === actifIndex) {
			dot.classList.add('dot_selected'); 
		} else {
			dot.classList.remove('dot_selected'); 
		}
	});
	
}

carrousel();