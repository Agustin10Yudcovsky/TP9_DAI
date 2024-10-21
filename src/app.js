document.addEventListener('DOMContentLoaded', function() {
    // Función que renderiza eventos futuros
    function renderEvents(events) {
      const eventsList = document.getElementById('events-list');
      events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.innerHTML = `<h2>${event.name}</h2><p>Fecha: ${event.date}</p>`;
        eventsList.appendChild(eventItem);
      });
    }
  
    // Obtener eventos futuros de eventController.js
    const upcomingEvents = getUpcomingEvents(events);
    renderEvents(upcomingEvents);
  });