function getExif(image) {
  EXIF.getData(image.value, function() {
    console.log("test");
  });

  // var img1 = document.getElementById("img1");
  // EXIF.getData(img1, function() {
  //   var make = EXIF.getTag(this, "Make");
  //   var model = EXIF.getTag(this, "Model");
  //   var makeAndModel = document.getElementById("makeAndModel");
  //   makeAndModel.innerHTML = `${make} ${model}`;
  // });

  // var img2 = document.getElementById("img2");
}
