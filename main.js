const fs = require('fs');

const rawData = fs.readFileSync('tikectpesawat.json');
const tickets = JSON.parse(rawData);

  
  function filterTickets({
    airline,
    minPrice,
    maxPrice,
    departureCity,
    arrivalCity
  }) {
    return tickets.filter(ticket => {
      let match = true;
  
      if (airline && ticket.flight_details.airline !== airline) {
        match = false;
      }
  
      if (departureCity && ticket.flight_details.departure.city !== departureCity) {
        match = false;
      }
  
      if (arrivalCity && ticket.flight_details.arrival.city !== arrivalCity) {
        match = false;
      }
  
      if (minPrice && ticket.price.amount < minPrice) {
        match = false;
      }
  
      if (maxPrice && ticket.price.amount > maxPrice) {
        match = false;
      }
  
      return match;
    });
  }
  
  // Example filter
  const filters = {
    airline: "Garuda Indonesia",
    minPrice: 1000000,
    maxPrice: 3000000,
    departureCity: "Jakarta"
  };
  
  const filteredTickets = filterTickets(filters);
  console.log(filteredTickets);
  