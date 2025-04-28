// quest40.js

function handleAlert() {
    console.log('Alert triggered');
  }
  
  const alertButtons = document.querySelectorAll('.alert-btn');
  
  alertButtons.forEach(button => {
    button.addEventListener('click', handleAlert);
  });
  