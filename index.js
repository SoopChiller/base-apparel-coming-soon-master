function getValue() {
  let value = document.getElementById('email-bar').value;
  value = value.toLowerCase();
  let correctFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(value === '' || !value.match(correctFormat)) {
    document.getElementById('email-bar').style.cssText = `
      border: 2px solid  #F96464;
    `
    document.getElementById('arrow-button').style.cssText = `
      left: 22.1rem;
      top: 0.00rem;
      width: 6.25rem;
      height: 3.70rem;
      flex-shrink: 0
    `
    document.getElementById('valid-email').style.display = 'block';

    document.getElementById('error').style.display = 'block'
  }

}

