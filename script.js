
  document.querySelector('#currentDay').innerHTML += moment().format('MMMM Do YYYY, h:mm:ss a');

  var objects = [{}]
  var objHours = parseInt(moment().format('HH'));

  function saveData() {

    for (i = 1; i <= 11; i++) {
      var dayPlannerText = document.querySelector('#text-entry' + i).value
      if (dayPlannerText === null) {

      } else {
        var textBox = document.querySelector('#text-entry' + i).value
        localStorage.setItem('textBox' + i, JSON.stringify(textBox));
        objects.push('textBox' + i);
      }
    }
  }

  function startParse() {
    for (i = 1; i <= 11; i++) {
      var getParse = JSON.parse(localStorage.getItem('textBox' + i));
      document.querySelector('#text-entry' + i).innerHTML = getParse;
    }
  }
  startParse();

  for (i = 8; i <= 18; i++) {
    if (i < objHours) {
      document.querySelector('#row-' + i).classList.add('past')
    }
    if (i === objHours) {
      document.querySelector('#row-' + i).classList.add('present')
    }
    if (i > objHours) {
      document.querySelector('#row-' + i).classList.add('future')
    }
  }