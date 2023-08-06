function desktop() {
  let value = document.getElementById('email-bar').value;
  value = value.toLowerCase();
  let correctFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(value === '' || !value.match(correctFormat)) {
    let emailBar = document.getElementById('email-bar').style.cssText = `
      border: 2px solid  #F96464;
    `
    let arrowButton = document.getElementById('arrow-button').style.cssText = `
      left: 22rem;
      top: 0.00rem;
      width: 6.25rem;
      height: 3.3rem;
      flex-shrink: 0
    `
    let validEmail = document.getElementById('valid-email').style.display = 'block';

    let error = document.getElementById('error').style.display = 'block'
  }
}

function mobile() {
  let value = document.getElementById('email-bar').value;
  value = value.toLowerCase();
  let correctFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(value === '' || !value.match(correctFormat)) {
    let emailBar = document.getElementById('email-bar').style.cssText = `
      border: 2px solid  #F96464;
    `
    let arrowButton = document.getElementById('arrow-button').style.cssText = `
      left: 15.90rem;
      bottom: 2.10rem;
      width: 4rem;
      height: 2.80rem;
      flex-shrink: 0;
      background-image: linear-gradient(to right,hsl(0, 80%, 86%),  hsl(0, 74%, 74%));
    `
    let validEmail = document.getElementById('valid-email').style.display = 'block';

    let emailConainer = document.getElementById('email-container').style.flexDirection = 'column';

    let error = document.getElementById('error');

    error.style.cssText = 'display: block; left: 13.70rem; top: 0.75rem';
  }
}

