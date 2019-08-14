const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function appendTimeToClock () {
  const clock = document.getElementById('clock');
  const dateDisplay = document.getElementById('date');

  const date = new Date();
  let min = date.getMinutes();
  let hour = date.getHours();
  const weekday = date.getDay();
  const dayMonth = date.getDate();
  const month = date.getMonth();

  min = `${min}`.length === 1 ? '0' + `${min}` : min;
  hour = `${hour}`.length === 1 ? '0' + `${hour}` : hour;


  clock.innerHTML = `${hour}:${min}`;
  dateDisplay.innerHTML = `${weekdays[weekday]} ${dayMonth} ${months[month]}`;
}

function addOnClickEvent () {
  const screen = document.getElementsByClassName('screen')[0];
  screen.addEventListener('click', (e) => {
    console.log('hey', e);
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  appendTimeToClock();
  addOnClickEvent();
});
