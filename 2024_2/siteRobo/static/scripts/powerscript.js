function start_car() { 
  fetch('/start-car') 
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    .catch(error => console.error(error)); 
}
function stop_car() { 
    fetch('/stop-car') 
      .then(response => response.json()) 
      .then(data => console.log(data)) 
      .catch(error => console.error(error)); 
  }