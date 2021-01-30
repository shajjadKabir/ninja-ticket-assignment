const bookingBtn = document.getElementById("book-now");
bookingBtn.addEventListener("click", function () {
    const economyClassCount = getInputValue("economyClass");
    const firstClassCount = getInputValue("firstClass");
    if (firstClassCount == 0 && economyClassCount == 0) {
        alert(
            'Mega city bus.com says, you need to fill up ticket fields.'
        )
    } else {
        document.getElementById('confirmation-message').style.display = 'flex';
    }

})


document.getElementById('cross-sign').addEventListener('click', function () {
    document.getElementById('confirmation-message').style.display = 'none';
    //form values
    document.getElementById('firstClass-count').value = 0;
    document.getElementById('economyClass-count').value = 0;
    document.getElementById('subtotal-amount').value = '$' + 0;
    document.getElementById('tax-amount').innerText = '$' + 0;
    document.getElementById('grand-total').innerText = '$' + 0;


    //confirmation message values
    document.getElementById('firstClass-ticket').innerText = 0;
    document.getElementById('economyClass-ticket').innerText = 0;
    document.getElementById('total-amount').innerText = '$' + 0;
})



function handleTicketChange(ticket, isIncrease) {

    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    calculateTotal();
}

//calculation 
function calculateTotal() {

    const firstClassCount = getInputValue('firstClass');

    const economyClassCount = getInputValue('economyClass');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('subtotal-amount').innerText = '$' + subTotal;

    const tax = Math.round(subTotal * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = tax + subTotal;
    document.getElementById('grand-total').innerText = '$' + grandTotal;


    //send confirmation message ticket & total amount
    document.getElementById('firstClass-ticket').innerText = firstClassCount;
    document.getElementById('economyClass-ticket').innerText = economyClassCount;

    document.getElementById('total-amount').innerText = '$' + grandTotal;

    bookingDetails(firstClassCount, economyClassCount, grandTotal);
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// Booking Information details
document.getElementById('booking-information').addEventListener('click', function () {

    document.querySelector('#confirmation-message').style.display = 'none';
    document.querySelector('.booking-form').style.display = 'none';
    document.querySelector('.booking-details').style.display = 'block';
})

function bookingDetails(firstClassTicket, economyTicket, totalBill) {

    document.getElementById('firstClassTicket').innerText = firstClassTicket;
    document.getElementById('economyClassTicket').innerText = economyTicket;
    document.getElementById('totalBill').innerText = totalBill;
}