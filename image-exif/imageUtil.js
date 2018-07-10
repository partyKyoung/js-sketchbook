function getExif(file) {
  const reader = new FileReader();
  const imageViewer = document.getElementById("imageViewer");
  const image = file.files[0];

  reader.onload = e => {
    EXIF.getData(image, () => {
      const tags = EXIF.getAllTags(image);

      // metadata 출력
      console.log(tags);

      // 이미지 미리보기
      imageViewer.style.backgroundImage = `url(${e.target.result})`;
    });
  };

  reader.readAsDataURL(image);
}

function fixRotationOfFile(file) {
  const image = file.files[0];
  const fileType = image.type;

  loadImage(
    image,
    img => {
      const imageViewer = document.getElementById("imageViewer");

      imageViewer.appendChild(img);
    },
    { maxWidth: 400, orientation: true }
  );
}
