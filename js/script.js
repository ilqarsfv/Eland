$(document).ready(function () {
  $("#changeBar").click((event) => {
    let element = $(event.target);
    element.toggleClass("changes");
    $("#langEng").toggleClass("brightOp")
    $("#langAze").toggleClass("fadeOp")
  });
});
