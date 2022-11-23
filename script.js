const scoreUser = document.querySelector('.score__user');
const scoreComp = document.querySelector('.score__comp');
const message = document.querySelector('.message__content');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const move = document.querySelector('.move__message');
const compMoves = ['Rock', 'Paper', 'Scissors'];
const iconRock = document.querySelector('.fa-hand-back-fist');
const iconPaper = document.querySelector('.fa-hand');
const iconScissors = document.querySelector('.fa-hand-scissors');
const scoreBoxUser = document.querySelector('.score__box-user');
const scoreBoxComp = document.querySelector('.score__box-comp');
const reset = document.querySelector('.reset');
let userChoiceNumber;
let compChoiceNumber;
let resultString = '';
let userResult = 0;
let compResult = 0;
const compChoice = () => {
	compChoiceNumber = Math.trunc(Math.random() * 3);

	console.log(`Computer picks ${compMoves[compChoiceNumber]}`);

	return compChoiceNumber;
};

const userChoice = (e) => {
	if (e.target.parentElement.classList.contains('rock')) {
		console.log('You picked Rock');
		userChoiceNumber = 0;
		scoreBoxUser.innerHTML = "<i class='fa-regular fa-hand-back-fist'></i>";
	} else if (e.target.parentElement.classList.contains('paper')) {
		console.log('You picked Paper');
		userChoiceNumber = 1;
		scoreBoxUser.innerHTML = "<i class='fa-regular fa-hand'></i>";
	} else {
		console.log('You picked Scissors');
		userChoiceNumber = 2;
		scoreBoxUser.innerHTML = "<i class='fa-regular fa-hand-scissors'></i>";
	}
	return userChoiceNumber;
};
const analyze = (userChoiceNumber, compChoiceNumber) => {
	console.log(userChoiceNumber, compChoiceNumber);

	if (userChoiceNumber == compChoiceNumber) {
		resultString = `You picked ${compMoves[userChoiceNumber]} and computer picks ${compMoves[compChoiceNumber]}`;
		draw();
	} else if (userChoiceNumber == 0 && compChoiceNumber == 1) {
		resultString = 'Paper covers Rock.';
		lose();
	} else if (userChoiceNumber == 0 && compChoiceNumber == 2) {
		resultString = 'Rock dulls Scissors.';
		win();
	} else if (userChoiceNumber == 1 && compChoiceNumber == 0) {
		resultString = 'Paper covers Rock.';
		win();
	} else if (userChoiceNumber == 1 && compChoiceNumber == 2) {
		resultString = 'Scissors cuts Paper.';
		lose();
	} else if (userChoiceNumber == 2 && compChoiceNumber == 0) {
		resultString = 'Rock dulls Scissors.';
		lose();
	} else if (userChoiceNumber == 2 && compChoiceNumber == 1) {
		resultString = 'Scissors cuts Paper.';
		win();
	}
};
const win = () => {
	userResult++;
	resultString += ' You Win!';
};

const lose = () => {
	compResult++;
	resultString += ' You Lose!';
};

const draw = () => {
	resultString += ' Draw!';
};

const updateResult = () => {
	if (compChoiceNumber == 0) {
		scoreBoxComp.innerHTML = "<i class='fa-regular fa-hand-back-fist'></i>";
	} else if (compChoiceNumber == 1) {
		scoreBoxComp.innerHTML = "<i class='fa-regular fa-hand'></i>";
	} else if (compChoiceNumber == 2) {
		scoreBoxComp.innerHTML = "<i class='fa-regular fa-hand-scissors'></i>";
	}

	message.textContent = resultString;
	scoreUser.textContent = userResult;
	scoreComp.textContent = compResult;
	move.textContent = 'Make your move!';
};

const resetScore = () => {
	message.textContent = '';
	userResult = 0;
	compResult = 0;
	scoreUser.textContent = userResult;
	scoreComp.textContent = compResult;
	scoreBoxComp.innerHTML = '';
	scoreBoxUser.innerHTML = '';
};

const thinking = () => {
	scoreBoxComp.innerHTML = '';
	message.textContent = '';
	setTimeout(() => {
		move.textContent = 'Computer thinking   . ';
	}, 330);
	setTimeout(() => {
		move.textContent = 'Computer thinking   .   .';
	}, 660);
	setTimeout(() => {
		move.textContent = 'Computer thinking   .   .   .';
	}, 1000);
};

const game = (e) => {
	userChoice(e);
	compChoice();
	analyze(userChoiceNumber, compChoiceNumber);
	thinking();
	setTimeout(updateResult, 1200);
};

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
reset.addEventListener('click', resetScore);
