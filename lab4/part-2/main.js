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

for (const i of arrayofimage) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${i}`);
    newImage.setAttribute('alt', text[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }




/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
