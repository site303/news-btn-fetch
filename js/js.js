"use strict";

const btnNews = document.getElementById('news');

function openWindow() {
  const tab = window.open('', '_blank');
  fetch('https://meowfacts.herokuapp.com/?count=8')

  .then(function (response) {

    return response.json();
  })
  .then(function (data) {
    let facts = '';
    for (const fact of data.data) {
      facts += `<p>${fact}</p>`;
    }
    tab.document.write(facts);
  })

  .catch(function (error) {
    console.error('Ошибка загрузки данных:', error);
  });
}








