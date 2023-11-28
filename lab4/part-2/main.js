const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayofimage = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];



/* Declaring the alternative text for each image file */
const text= {
    'pic1.jpg' : 'human eye',
    'pic2.jpg' : 'Rocks',
    'pic3.jpg' : 'Purple and white flowers',
    'pic4.jpg' : 'painting',
    'pic5.jpg' : 'a leaf'
  }

/* Looping through images */

for (const i of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${i}`);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

  

/* Wiring up the Darken/Lighten button */
