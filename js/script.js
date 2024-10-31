$(document).ready(function () {
  $("#changeBar").click((event) => {
    let element = $(event.target);
    element.toggleClass("changes");
    $("#langEng").toggleClass("brightOp");
    $("#langAze").toggleClass("fadeOp");
  });

  let a = $("#mainAbout");
  a.on("mousemove", parallax);
  function parallax(e) {
    $(".partialConfetti").each(function () {
      const speed = $(this).data("speed");
      const x = (window.innerWidth - e.pageX * speed) / 200;
      const y = (window.innerHeight - e.pageY * speed) / 200;
      $(this).css("transform", `translateX(${x}px) translateY(${y}px)`);
    });
  }

  $(".achievements").slick({
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });
  const swiper = new Swiper(".mainMetodSliders.swiper", {
    slidesPerView: 1.25,
    spaceBetween: -90,
    centeredSlides: true,
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".methodRightArr",
      prevEl: ".methodLeftArr",
    },
  });
});
