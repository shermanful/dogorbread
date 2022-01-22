const image_input = document.querySelector('#image_input');
const try_me = document.querySelector('#try_me');
let uploaded_image;

//ml5.classification

image_input.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector(
      '#display_image'
    ).style.backgroundImage = `url(${uploaded_image})`;
  });

  reader.readAsDataURL(this.files[0]);
});

try_me.addEventListener('click', function () {
  if (uploaded_image) {
    console.log('Try Me Clicked!');
  } else {
    console.log('Nothing to test!');
  }
});
