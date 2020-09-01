

function toggleMenu()
{   
    document.querySelector('.fa-bars').classList.toggle('dis');
    document.querySelector('.fa-close').classList.toggle('dis');
    document.querySelector('.main-nav').classList.toggle('block');
    document.querySelector('.main-nav li a').classList.toggle('block');
}


function toggleSubMenu()
{
    document.querySelector('.second-menu').classList.toggle('clickFaAngle');
}





function changeOrder() {
    const allSlides = document.querySelectorAll(".single-slide");
    const previous = "1";
    const current = "2";
    const next = "3";
  
    for (const slide of allSlides) {
      const order = slide.getAttribute("data-order");
  
      switch (order) {
        case current:
          slide.setAttribute("data-order", previous);
          break;
        case next:
          slide.setAttribute("data-order", current);
          break;
        case previous:
          slide.setAttribute("data-order", next);
          break;
      }
    }
  }
  function changeOrderBack() {
    const allSlides = document.querySelectorAll(".single-slide");
    const previous = "1";
    const current = "2";
    const next = "3";
  
    for (const slide of allSlides) {
      const order = slide.getAttribute("data-order");
  
      switch (order) {
        case current:
          slide.setAttribute("data-order", next);
          break;
        case next:
          slide.setAttribute("data-order", previous);
          break;
        case previous:
          slide.setAttribute("data-order", current);
          break;
      }
    }
  }