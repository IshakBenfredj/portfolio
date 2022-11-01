// Change The Language With LocalStorage
let langLocalSto = localStorage.getItem('lang');
let langs = document.querySelectorAll('.settings .languages span');
let dataLang = document.querySelectorAll('[data-lang]');
if(langLocalSto !== null ){
	langs.forEach(l=>{
		if (l.dataset.change === langLocalSto){
			l.classList.add('active');
		} else {
			l.classList.remove('active');
		}
	});
		dataLang.forEach(word=>{
			word.innerHTML = lang[langLocalSto][word.dataset.lang];
		})
		if(langLocalSto === 'ar'){
			document.body.classList.add('arabic');
		} else {
			document.body.classList.remove('arabic');
		};
}

// DayNight Mood In LocalStorage
let dayNight = document.querySelector('.settings .mood span');
let verDayNight = localStorage.getItem('night');
if(verDayNight === 'true') {
	dayNight.classList.add('active');
	document.body.classList.add('night');
} else {
	dayNight.classList.remove('active');
	document.body.classList.remove('night');
}

// Main Color with LocalStorage
let colors = document.querySelectorAll('.settings .colors .color');
let mainColor = localStorage.getItem('mainColor');
if(mainColor !== null){
	document.querySelector(':root').style.setProperty('--main-color',mainColor);
	colors.forEach(color=>{
		if(color.style.backgroundColor === mainColor) {
			colors.forEach(color=>{
				color.classList.remove('active');
			})
			color.classList.add('active');
		}
	})
}

// Clicking for show menu toggle
let header = document.querySelector('header');
let lis = document.querySelectorAll('header .container ul li');
lis.forEach(li=>{
	li.onclick = function(){
		this.classList.toggle('open');
		lis.forEach(li=>{
			if(li !== this) {
				li.classList.remove('open');
			}
		});
	};
});

// Clicking for show menu in phones
let menu = document.querySelector('.menu');
let bars = document.querySelector('.bars');
let xClose = document.querySelector('.close');
bars.onclick = function(){
	menu.classList.add('open');
	settings.classList.remove('open');
}
xClose.onclick = function(){
	menu.classList.remove('open');
}

// Show settings
let settings = document.querySelector('.settings')
let settingsIcon = document.querySelector('.settings .icon')
settingsIcon.onclick = function(){
	settings.classList.toggle('open');
	menu.classList.remove('open');
}

// Change The Language
langs.forEach(l=>{
	l.onclick = function(){
		langs.forEach(l=>{
			l.classList.remove('active');
		});
		l.classList.add('active');
		let langChang = l.dataset.change;
		dataLang.forEach(word=>{
			word.innerHTML = lang[langChang][word.dataset.lang];
		})
		if(langChang === 'ar'){
			document.body.classList.add('arabic');
		} else {
			document.body.classList.remove('arabic');
		};
		localStorage.setItem('lang',langChang);
	}
})

// Add mood of night day
dayNight.onclick = function(){
	dayNight.classList.toggle('active');
	document.body.classList.toggle('night');
	if(document.body.classList.contains('night')){
		localStorage.setItem('night','true');
	}else{
		localStorage.setItem('night','false');
	}
}

// Pick Main Color 
colors.forEach(color=>{
	color.onclick = function(){
		colors.forEach(color=>{
			color.classList.remove('active');
		})
		color.classList.add('active');
		mainColor = color.style.backgroundColor;
		document.querySelector(':root').style.setProperty('--main-color',mainColor);
		localStorage.setItem('mainColor',mainColor);
	}
})