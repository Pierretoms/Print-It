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
let actifIndex = 0;

arrow_left.addEventListener("click",function(){
	actifIndex = (actifIndex - 1);
	mooveDot(actifIndex)
	console.log("flèches gauche cliqué !");
});


arrow_right.addEventListener("click",function(){
	actifIndex = (actifIndex + 1);
	mooveDot(actifIndex)
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