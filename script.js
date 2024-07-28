let noClickCount = 0;
const reasons = [
	'Mój najukochańszy najsłodszy i najcudowniejszy skarbie. Nawet nie wiesz jak bardzo jestem szczęśliwy że ze mną jesteś. Dalej nie mogę pojąć co we mnie widzi tak idealna bogini wszystkiego co najwspanialsze. Jestem pewny że to dopiero początek i przed nami jeszcze dużo więcej takich miesięcy i lat. Zrobię wszystko aby były dla Ciebie możliwie jak najlepsze.<br>Kocham Cię',
	'Kocham Cię bo jesteś moją dziewczyną',
	'Kocham Cie za Twój wygląd',
	'Kocham Cię za Twój charakter',
	'Kocham Cię za Twoje poczucie humoru',
	'Kocham Cię za Twój śmiech',
	'Kocham Cię za Twoją dobroć',
	'Kocham Cię za Twoje najpiękniejsze oczy',
	'Kocham Cię za szczęście które mi dajesz',
	'Kocham Cię bo jesteś moim skarbem',
	'Kocham Cię za to jak wrażliwa jesteś',
	'Kocham Cię za to jak kolorujesz mój świat',
	'Kocham Cię za Twój zapach',
	'Kocham Cię za Twoje prezenty',
	'Kocham Cię za to że mnie motywujesz',
	'Kocham Cię za to że dajesz mi sił',
	'Kocham Cię za to że mnie wspierasz',
	'Kocham Cię za to że mnie rozumiesz',
	'Kocham Cię za to jak inteligenta jesteś',
	'Kocham Cię za Twoje wiadomości',
	'Kocham Cię za Twoje głosówki',
	'Kocham Cię za nasze wspólne spanie',
	'Kocham Cię za naszą pierwszą randkę',
	'Kocham Cię za wszystkie zdjęcia',
	'Kocham Cię że wypełniasz moje życie',
	'Kocham Cię za Twoje spojrzenie pełne miłości',
	'Kocham Cię za każdą sekundę razem',
	'Kocham Cię za to jak wyjątkowa jesteś',
	'Kocham Cię za to jak piękna jesteś',
	'Kocham Cię bo jesteś wspanialsza niż każdy inny',
	'Kocham Cię bo mnie akceptujesz',
	'Kocham Cię za to że mnie słuchasz',
	'Kocham Cię za to że chcesz ze mną rozmawiać',
	'Kocham Cię za to że poprawiasz mi humor',
	'Kocham Cię za to że dajesz mi szansę',
	'Kocham Cię za to że zmieniłaś moje życie',
	'Kocham Cię bo przy Tobie zapominam o wszystkim',
	'Kocham Cię za wszystkie filmy które obejrzeliśmy',
	'Kocham Cię za to że dajesz mi nadzieje',
	'Kocham Cię za nasze wspólne granie',
	'Kocham Cię za to że mi ufasz',
	'Kocham Cię za to że mam Cię całą dobę w głowie',
	'Kocham Cię za Twój śpiew',
	'Kocham Cię za Twoją nieśmiałość',
	'Kocham Cię za Twoje rady',
	'Kocham Cię za to że starasz się dla mnie',
	'Kocham Cię za nasze pocałunki',
	'Kocham Cię za to że wiesz czego potrzebuje',
	'Kocham Cię za to że dbasz o naszą miłość',
	'Kocham Cię za Twoją otwartość',
	'Kocham Cię za Twoją spontaniczność',
	'Kocham Cię za Twoją słodycz',
	'Kocham Cię za każdy Twój pomysł',
	'Kocham Cię za Twoją wytrwałość',
	'Kocham Cię bo wiesz co lubię',
	'Kocham Cie za Twoją pamięć',
	'Kocham Cię za Twoje poświęcenie',
	'Kocham Cię za motylki w brzuchu które mi dajesz',
	'Kocham Cię za wszystkie sny z Tobą',
	'Kocham Cię za Twoją odwagę',
	'Kocham Cię za siłę jakiej mi dodajesz',
	'Kocham Cię za to że trzymasz klucz do mojego serca',
	'Kocham Cię jak nikt inny',
	'Kocham Cię całować',
	'Kocham Cię dotykać',
	'Kocham Cię oglądać',
	'Kocham Cię bo nikt do mnie tak nie pasuje jak Ty',
	'Kocham Cię bo jesteś dobrą osobą',
	'Kocham Cię za nasze wspólne marzenia',
	'Kocham Cię za naszą przyszłość',
	'Kocham Cię za ten miesiąc razem',
	'Kocham Cię za opiekę w stosunku do mnie',
	'Kocham Cię bo jesteś moją rodziną',
	'Kocham Cię za Twoje zaproszenia',
	'Kocham Cię za naszą więź',
	'Kocham Cię za naszą relację',
	'Kocham Cię za Twoje włosy',
	'Kocham Cię za Twoje słodkie rączki',
	'Kocham Cię za Twoje dłonie',
	'Kocham Cię za Twoje tatuaże',
	'Kocham Cię za Twoje najpiękniejsze nogi',
	'Kocham Cię za Twój zgrabny tyłek',
	'Kocham Cię za Twoje idealne cycki',
	'Kocham Cię za Twoje seksowne ciało',
	'Kocham Cię kiedy jesteś obok',
	'Kocham Cię kiedy jesteś daleko',
	'Kocham Cię gdy mogę Cię przytulać',
	'Kocham Cię za to że mogę nosić Cię na rękach',
	'Kocham Cię za Twój romantyzm',
	'Kocham Cię bo jesteś moją księżniczką',
	'Kocham Cię bo dzięki Tobie odkryłem czym jest miłość',
	'Kocham Cię za Twoją wrażliwość',
	'Kocham Cię za Twój styl',
	'Kocham Cię za Twój brzuch i talię',
	'Kocham Cię za Twoją siłę',
	'Kocham Cię za Twoje starania w nasz związek',
	'Kocham Cię bo nigdy mnie nie rozczarowałaś',
	'Kocham Cię za każde przepraszam i dziękuję',
	'Kocham Cię za wszystkie momenty w których się mną chwaliłaś',
	'Kocham Cię bo sprawiasz że czuje się wyjątkowy',
	'Kocham Cię za to że jesteś',
];

let currentReasonIndex = 0;

function showLove() {
	document.querySelector('.buttons').classList.add('hidden');
	document.getElementById('love-message').classList.remove('hidden');
	document.getElementById('reason').innerHTML = reasons[currentReasonIndex];
	document.getElementById('reason').classList.add('fade-in', 'first');
	document.getElementById('reason-container').style.height = 'auto'; // Make sure to set the initial height
}

function shrinkNoButton() {
	const noButton = document.getElementById('no-button');
	const yesButton = document.getElementById('yes-button');
	noClickCount++;

	if (noClickCount >= 10) {
		noButton.style.display = 'none';
		yesButton.style.transform = 'scale(1.2)';
	} else {
		const noButtonScale = 1 - 0.1 * noClickCount;
		const yesButtonScale = 1 + 0.1 * noClickCount;
		noButton.style.transform = `scale(${noButtonScale})`;
		yesButton.style.transform = `scale(${yesButtonScale})`;
	}
}

function prevReason() {
	const reasonElement = document.getElementById('reason');
	reasonElement.classList.remove('fade-in');
	reasonElement.classList.add('fade-out-left');

	setTimeout(() => {
		currentReasonIndex =
			currentReasonIndex === 0 ? reasons.length - 1 : currentReasonIndex - 1;
		reasonElement.innerHTML = reasons[currentReasonIndex];
		reasonElement.classList.remove('fade-out-left', 'first');
		reasonElement.classList.add('fade-in');
		updateContainerHeight();
	}, 500); // Adjust to match CSS animation duration
}

function nextReason() {
	const reasonElement = document.getElementById('reason');
	reasonElement.classList.remove('fade-in');
	reasonElement.classList.add('fade-out-right');

	setTimeout(() => {
		currentReasonIndex =
			currentReasonIndex === reasons.length - 1 ? 0 : currentReasonIndex + 1;
		reasonElement.innerHTML = reasons[currentReasonIndex];
		reasonElement.classList.remove('fade-out-right', 'first');
		reasonElement.classList.add('fade-in');
		updateContainerHeight();
	}, 500);
}

function updateContainerHeight() {
	const reasonContainer = document.getElementById('reason-container');
	if (currentReasonIndex === 0) {
		reasonContainer.style.height = 'auto';
	} else {
		reasonContainer.style.height = '100px';
	}
}
