document.addEventListener('mousemove', function(e) {
	// console.log(e.pageX, e.pageY);
	const r = Math.round(e.pageX * 255 / window.innerWidth);
	const b = Math.round(e.pageY * 255 / window.innerHeight);
	const g = r / b; // can do many things here
	//const g = Math.round(e.pageY * 255 / window.innerHeight);
	document.body.style.backgroundColor = color;
});
