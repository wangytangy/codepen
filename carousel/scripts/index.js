const NUM_CARDS = 5;
let idx = 0;

function addClassNameForMS (card, className, ms) {
  card.classList.add(className);
  setTimeout(() => {
    card.classList.remove(className);
  }, ms);
}

function showNextCard () {
  const cards = document.querySelectorAll('.card');
  const currentIdx = idx;
  // get next idx
  const nextIdx = idx === NUM_CARDS - 1 ? 0 : idx + 1;

  cards[currentIdx].classList.remove('move-in-left');
  cards[currentIdx].classList.remove('move-in-right');

  cards[nextIdx].classList.add('move-in-left');
  addClassNameForMS(cards[currentIdx], 'move-out-left', 950);

  // increment idx
  idx = nextIdx;
}

function showPrevCard () {
  const cards = document.querySelectorAll('.card');
  const currentIdx = idx;
  // get next idx
  const nextIdx = idx === 0 ? NUM_CARDS - 1 : idx - 1;

  cards[currentIdx].classList.remove('move-in-right');
  cards[currentIdx].classList.remove('move-in-left');

  cards[nextIdx].classList.add('move-in-right');
  addClassNameForMS(cards[currentIdx], 'move-out-right', 950);

  // increment idx
  idx = nextIdx;
}

function addCards (numCards, parentEl) {
  for (let i = 0; i < numCards; i++) {
    const card = document.createElement('div');
    card.innerHTML = `${i + 1}`;
    card.classList.add('card');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = `#${randomColor}`;
    // make first card visible by default
    if (i === 0) card.classList.add('move-in-right');
    parentEl.append(card);
  }
}

function unfreezeAnimations () {
  /**
    all animation duration is 0s by default so that exit/enter animations will not play on page load

    this setTimeout callback will allow animations after 1 second
  */
  setTimeout(() => {
    document.body.className='';
  }, 1000);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const carouselContainer = document.getElementById('carousel-container');
  unfreezeAnimations();
  addCards(NUM_CARDS, carouselContainer);
  nextBtn.addEventListener('click', showNextCard);
  prevBtn.addEventListener('click', showPrevCard);
});
