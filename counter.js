document.addEventListener("DOMContentLoaded", function() {
  var preloader = document.getElementById('preloader');
  var delay = preloader.getAttribute('data-delay');
  var counterElement = document.querySelector('.counter-2'); // Das Element, das die Zahl anzeigen wird
  var counter = 0; // Startwert des Counters

  // Setze den z-index des Preloaders hoch genug, damit er über anderen Elementen angezeigt wird
  preloader.style.zIndex = '9999'; // Hier kannst du den z-index anpassen, falls nötig

  // Funktion zum Zählen in Zehnerschritten
  function updateCounter() {
    if (counter < 100) { // Der Zähler soll maximal bis 100 gehen
      counter += 10; // Erhöhe den Zähler um 10
      counterElement.textContent = counter + '%'; // Aktualisiert den Text des Counters
      setTimeout(updateCounter, delay / 40); // Zeit zwischen den Updates
    }
  }

  // Der Preloader wird immer angezeigt und nach der Verzögerung ausgeblendet
  preloader.style.display = 'flex';
  setTimeout(function() {
    preloader.style.display = 'none';
  }, delay);

  // Zähler starten
  updateCounter();
});
