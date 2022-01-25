const URL = 'https://teachablemachine.withgoogle.com/models/8zi2D36nX/';
const upload_an_image = document.querySelector('#image_input');
const try_me = document.querySelector('#try_me');
let imageFile, uploaded_image, model, result;

const modelURL = URL + 'model.json';
const metadataURL = URL + 'metadata.json';

async function app() {
  console.log('Loading model..');

  // Load the model.
  model = await tmImage.load(modelURL, metadataURL);
  console.log('Successfully loaded model');

  const imgEl = uploaded_image;
  console.log('Is this image?', imgEl);

  // Make a prediction through the model on our image.
  console.log('Image being scanned.');
  result = await model.predict(imgEl);

  let bread = result[0];
  let dog = result[1];

  if (bread['probability'] >= dog['probability']) {
    console.log('BREAD');
    document.getElementById('print_answer').innerHTML = 'BREAD';
  } else {
    console.log('DOG');
    document.getElementById('print_answer').innerHTML = 'DOG';
  }
}

upload_an_image.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector('#display_image').src = uploaded_image;
    document.getElementById('print_answer').innerHTML = '';
  });

  imageFile = this.files[0];
  reader.readAsDataURL(this.files[0]);
});

try_me.addEventListener('click', function () {

  uploaded_image = document.getElementById('display_image');
  console.log('Try Me Clicked!');
  app();
});
