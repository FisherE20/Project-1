$("#search").on("click", function () {

  var API_KEY = '17138553-d9b102c8586536763f3a11d32';
  var data = $(".search").val();
  var queryURL = "https://pixabay.com/api/?key=" +
    API_KEY +
    "&q=" + data +
    "&category=travel" +
    "&id=" +
    "&order=popular"
  "&image_type=photo";

  console.log(queryURL);


  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (data) {
    console.log(data);
    if (parseInt(data.totalHits) > 0)
      $.each(data.hits, function (i, hit) {
        console.log(hit.previewURL);
        var imageUrl = hit.previewURL;
        //Creating and storing an img tag
        var photo = $("<img>");
        if (hit.previewWidth > hit.previewHeight) {
          photo.addClass("wide");
        } else if (hit.previewWidth < hit.previewHeight) {
          photo.addClass("tall");
        }

        //Setting the photo src attribute to imgUrl
        photo.attr("src", imageUrl);
        photo.attr("alt", "photo");
        photo.addClass("grid");
        //prepending the photo to the image div
        $("#images").append(photo);
      });
    else
      console.log('No hits');
  });

});
