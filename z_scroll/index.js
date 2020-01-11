

let oldScrollPosition = 0;
function addOnScrollEvent () {
  const bg = document.getElementsByClassName('background')[0];
  const card = document.getElementsByClassName('card')[0];

  window.addEventListener('scroll', function(e) {
    // Get the new Value
    let newScrollPosition = window.pageYOffset;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    console.log('y offset', newScrollPosition);
    let perspectiveOriginY = newScrollPosition + windowHeight;
    console.log('perspectiveOriginY', perspectiveOriginY);
    console.log()
    if (oldScrollPosition - newScrollPosition > 0) {
      // up
      bg.style.perspectiveOrigin = `50% ${perspectiveOriginY}px`;
      card.style.transform = `translate3d(0px, 0px, -${newScrollPosition}px)`;
    } else if (oldScrollPosition - newScrollPosition < 0){
      // down
      bg.style.perspectiveOrigin = `50% ${perspectiveOriginY}px`;
      card.style.transform = `translate3d(0px, 0px, -${newScrollPosition}px)`;
    }

    // Update the old value
    oldScrollPosition = newScrollPosition;
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  addOnScrollEvent();
});
