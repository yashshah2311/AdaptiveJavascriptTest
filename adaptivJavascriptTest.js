let dateChangeHistory = [];
let colorChangeHistory = [];

function calculateDateDifference() {
  const date1 = new Date(document.getElementById('date1').value);
  const date2 = new Date(document.getElementById('date2').value);

  if (!isNaN(date1.getTime()) && !isNaN(date2.getTime())) {
    const difference = date2.getTime() - date1.getTime();
    displayDifference(difference);
    lastDateChange = `Last date change: ${new Date().toLocaleString()}`;
    document.getElementById('dateTrace').textContent = lastDateChange;

    dateChangeHistory.push(lastDateChange);
    displayDateChangeHistory();
  } else {
    document.getElementById('difference').textContent = 'Invalid dates';
  }
}

function displayDifference(difference) {
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const result = `Difference: ${seconds} seconds, ${minutes} minutes, ${hours} hours, ${days} days, ${months} months, ${years} years`;
  document.getElementById('difference').textContent = result;
}

function changeColor() {
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;
  
    if (textColor !== bgColor) {
      document.body.style.color = textColor;
      document.body.style.backgroundColor = bgColor;
      lastColorChange = `Last color change: ${new Date().toLocaleString()}`;
      document.getElementById('colorChangeTrace').textContent = lastColorChange;
  
      colorChangeHistory.push(lastColorChange);
      displayColorChangeHistory();
    } else {
      alert('Text and background colors cannot be the same.');
    }
  }