$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown();
  });
  $("#cancelarBtn").click(function () {
    $("form").slideUp();
  });
  $("form").on("submit", function (e) {
    e.preventDefault();
    const newUrlImg = $("#newImgURL").val();
    const newItem = $("<li style='display: none'></li>");
    $(`<img src="${newUrlImg}"/>`).appendTo(newItem);
    $(`<div class="overlayImageLink"/>
         <a href="${newUrlImg}" target="_blank" title="Ver imagem em tamanho real">
         Ver imagem em tamanho real</a>
       </div>`).appendTo(newItem);
    $(newItem).appendTo("ul");
    $(newItem).fadeIn();
    $("#newImgURL").val("");
  });
});
