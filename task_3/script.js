const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn-test');
const screenWidth = window.screen.width
const screenHeight = window.screen.height

const width = window.innerWidth;
const height = window.innerHeight;
 

// Функция, выводящая текст об ошибке
const error = () => {
  status.textContent = 'Информация о местоположении недоступна';
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = 'Ссылка на карту';
}

btn.addEventListener('click', () => {
    console.log("Ширина экрана: " + width + "px");
    console.log("Высота экрана: " + height + "px");
    monitor.textContent = `Размеры вашего экрана:`;
    monitorSize.textContent = `Ширина: ${width}, Высота: ${height}`;
  mapLink.href = '';
  mapLink.textContent = '';
  
  if (!navigator.geolocation) {
    status.textContent = 'Информация о местоположении недоступна';
  } else {
    statusGeo.textContent = `Ваше месторасположение:`;
    status.textContent = 'Определение местоположения…';
    navigator.geolocation.getCurrentPosition(success, error);
  }


});