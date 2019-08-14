const NUM_CELLS = 5;
let idx = 0;

function addTemporaryClass (node, className, ms) {
  node.classList.add(className);
  setTimeout(() => {
    node.classList.remove(className);
  }, ms);
}

function showNextCell () {
  const cells = document.querySelectorAll('.cell');
  const currentIdx = idx;
  const prevIdx = currentIdx === 0 ? NUM_CELLS - 1 : idx - 1;
  idx = idx === NUM_CELLS - 1 ? 0 : idx + 1;

  cells[currentIdx].classList.remove('move-in-left');
  cells[currentIdx].classList.remove('move-in-right');
  addTemporaryClass(cells[currentIdx], 'move-left', 1000);

  cells[idx].classList.add('move-in-left');
}

function showPrevCell () {
  const cells = document.querySelectorAll('.cell');
  const currentIdx = idx;
  const prevIdx = NUM_CELLS - 1 ? 0 : idx + 1;
  idx = idx === 0 ? NUM_CELLS - 1 : idx - 1;

  cells[currentIdx].classList.remove('move-in-right');
  cells[currentIdx].classList.remove('move-in-left');
  addTemporaryClass(cells[currentIdx], 'move-right', 1000);

  cells[idx].classList.add('move-in-right');
}

function addCells (numCells, parentEl) {
  for (let i = 0; i < numCells; i++) {
    const cell = document.createElement('div');
    cell.innerHTML = `${i + 1}`;
    cell.classList.add('cell');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    cell.style.backgroundColor = `#${randomColor}`;
    // make first cell visible by default
    if (i === 0) cell.classList.add('move-in-right');
    parentEl.append(cell);
  }
}

function unfreezeAnimations () {
  // all animation duration is 0s by default so exit/enter animations will not play on page load

  // setTimeout callback will allow animations after 1 second
  setTimeout(() => {
    document.body.className='';
  }, 1000);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const carouselContainer = document.getElementById('carousel-container');
  unfreezeAnimations();
  addCells(NUM_CELLS, carouselContainer);
  nextBtn.addEventListener('click', showNextCell);
  prevBtn.addEventListener('click', showPrevCell);
});
