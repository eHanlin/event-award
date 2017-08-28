$(function() {
  $("#award-application").hide();
  $("#award-standard").hide();
  $("#sweet-tip").hide();
  $(".work-hard").on("click", function() {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(location.href),
      "facebook-share-dialog",
      "width=626,height=436"
    );
  });
});
