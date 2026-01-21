const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');
const scrollContainer = document.querySelectorAll('.products');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
        imgs[n].style.display = 'block';

}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

scrollContainer.forEach(item => {
  item.addEventListener('wheel', (e) => {

    const atStart = item.scrollLeft === 0;
    const atEnd =
      item.scrollLeft + item.clientWidth >= item.scrollWidth - 1;

    if (
      (e.deltaY > 0 && !atEnd) ||
      (e.deltaY < 0 && !atStart)
    ) {
      e.preventDefault();
      item.scrollLeft += e.deltaY;
    }

  }, { passive: false });
});