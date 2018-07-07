function getExif(file) {
  const reader = new FileReader();
  const imageViewer = document.getElementById("imageViewer");
  const image = file.files[0];

  reader.onload = e => {
    EXIF.getData(image, () => {
      const tags = EXIF.getAllTags(image);

      // 이미지 미리보기
      imageViewer.style.backgroundImage = `url(${e.target.result})`;
    });
  };

  reader.readAsDataURL(image);
}
