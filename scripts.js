let counter = document.querySelector('.counter');
const addCountBtn = document.querySelector('#addCountBtn');
const resetCountBtn = document.querySelector('#resetCountBtn');
const substractCountBtn = document.querySelector('#substractCountBtn');

let count = 0;

addCountBtn.addEventListener('click', increaseCount);
substractCountBtn.addEventListener('click', decreaseCount);
resetCountBtn.addEventListener('click', resetCount);

//increase function
function increaseCount () {
	count++;
	counter.innerHTML = count;
	if (counter.innerHTML > '0') {
		counter.style.color = '#4caf50'
	} else if (counter.innerHTML === '0') {
		counter.style.color = 'white';
	}
	counter.animate([{opacity: '0.2'}, {opacity: '1.0'}], {duration: 200, fill: 'forwards'});
}

//reset function
function resetCount () {
	count = 0 ;
	counter.innerHTML = count;
}

//decrease function
function decreaseCount () {
	count--;
	counter.innerHTML = count;
	if (counter.innerHTML < '0') {
		counter.style.color = 'red'
	} else if (counter.innerHTML === '0') {
		counter.style.color = 'white';
	}
	counter.animate([{opacity: '0.2'}, {opacity: '1.0'}], {duration: 200, fill: 'backwards'});
}
