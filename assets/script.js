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
const dot = document.querySelectorAll('.dot');
const imgcarrousel = document.querySelector('.banner-img');
let actifIndex = 0;

arrow_left.addEventListener("click",function(){
	actifIndex = (actifIndex - 1);
	mooveDot(actifIndex)
	carrousel(actifIndex, 'left')
	console.log("flèches gauche cliqué !");
});


arrow_right.addEventListener("click",function(){
	actifIndex = (actifIndex + 1);
	mooveDot(actifIndex)
	carrousel(actifIndex, 'right')
	console.log("flèches droite cliqué !");
});

function mooveDot(index) {
	dot.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); 
		} else {
			dot.classList.remove('dot_selected'); 
		}
	});
}

function carrousel(index, direction) {

	if (actifIndex === -1 && direction === 'left') {
		actifIndex = slides.length - 1;
	} else if (actifIndex === slides.length && direction === 'right') {
		actifIndex = 0;
	}
	
	const imgSlide = `assets/images/slideshow/${slides[actifIndex].image}`;
	imgcarrousel.src = imgSlide;
	
	const txtSlide = slides[actifIndex].tagLine;
	document.querySelector('p').innerHTML = txtSlide;

	mooveDot(actifIndex);
	
}

carrousel(actifIndex, 'démarrage');