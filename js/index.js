window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbarr');
  navbar.classList.toggle('scrolled', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.image-aqua1');

  let currentIndex = 0;

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % imageContainers.length;

    imageContainers[currentIndex].classList.add('hidden');
    imageContainers[nextIndex].classList.remove('hidden');

    currentIndex = nextIndex;
  }, 5000); // Change image every 5 seconds (5000 milliseconds)
});

//   function conTactUs () {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('messga').value;

//     if (name === '' || email === '' || message === '') {
//         document.getElementById('warning').innerText = 'Please fill out all fields.';
//         return false;
//     }

//     if (!document.getElementById('checkbox').checked) {
//         document.getElementById('warning').innerText = 'Please agree to data collection.';
//         return false;
//     }

//     return true;
// }

// document.getElementById('submit').addEventListener('click', function(event) {
//     if (!validateForm()) {
//         event.preventDefault();
//     }
// });

function conTactUs() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mess = document.getElementById('messga').value;

  var notifications = 'Thank you for your message. It has been sent.';
  var warning = 'The field is required.';

  if (name.length > 1 || email.length > 1 || mess.length > 1) {
    var notification = document.getElementById('notification');
    notification.textContent = notifications;

    document.getElementsByClassName('hihi');

    if (notifications.length > 2) {
      var el = notifications[0];
      el.className = 'cool';
    }

    var messsss = document.getElementById('warning');
    messsss.textContent = '';
    return true;

  } else if (name.length < 1 || email.length < 1 || mess.length < 1) {
    var messs = document.getElementById('warning');
    messs.textContent = warning;

    var notification2 = document.getElementById('notification');
    
    notification2.textContent = 'One or more fields have an error. Please check and try again.';
    return false;

  }

}
var elements = document.getElementsByClassName('hot');

if (elements.length > 2) {
  var el = elements[2];
  el.className = 'cool';
}

const progressBar = document.getElementById('myProgressBar');

let progressValue = 0;

function updateProgressBar() {
    if (progressValue < 90) {
        progressValue += 1; // Increase progress by 1% per second
        progressBar.style.width = `${progressValue}%`;
        requestAnimationFrame(updateProgressBar);
    }
}

updateProgressBar();

const progressbra = document.getElementById('myProgressbra');

let progresValue = 0;

function updateProgressBra() {
  if (progresValue < 80) {
      progresValue += 1; // Increase progress by 1% per second
      progressbra.style.width = `${progresValue}%`;
      requestAnimationFrame(updateProgressBra);
  }
}

updateProgressBra();

const progressBa = document.getElementById('myProgressBa');

let progresValu = 0;

function updateProgresBa() {
    if (progresValu < 95) {
        progresValu += 1; // Increase progress by 1% per second
        progressBa.style.width = `${progresValu}%`;
        requestAnimationFrame(updateProgresBa);
    }
}
updateProgresBa();

const progressBr = document.getElementById('myProgressBr');

let progresVale = 0;

function updateProgresBr() {
    if (progresVale < 88) {
        progresVale += 1; // Increase progress by 1% per second
        progressBr.style.width = `${progresVale}%`;
        requestAnimationFrame(updateProgresBr);
    }
}
updateProgresBr();
