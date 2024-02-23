let selectedButtons = [];
let ticketsLeft = 12;
let totalPrice = 0;
let discountAmount = 0;
let couponApplied = false; 

function changeColor(buttonId, seatName, seatInfo, pricePerSeat) {
  const button = document.getElementById(buttonId);

  if (selectedButtons.find(seat => seat.id === buttonId)) {
    // Deselect the button
    button.style.backgroundColor = '';
    selectedButtons = selectedButtons.filter(seat => seat.id !== buttonId);
    ticketsLeft++;
    totalPrice -= pricePerSeat;
  } else {
    // Select the button
    if (selectedButtons.length < 4 && ticketsLeft > 0) {
      button.style.backgroundColor = '#1DD100';
      selectedButtons.push({ id: buttonId, name: seatName, info: seatInfo, price: pricePerSeat });
      ticketsLeft--;
      totalPrice += pricePerSeat;
    }
  }
  
 
    // Update the tickets left count
    document.getElementById('tickets-left').innerText = ticketsLeft;

    // Update the number of selected seats
    document.getElementById('selected-seats').innerText = selectedButtons.length;

     // Update the total price
     document.getElementById('total-price').innerText = totalPrice.toFixed(2);

     updateGrandTotal();
     displaySelectedSeatsDetails();

     updateNextButton();
  
}
