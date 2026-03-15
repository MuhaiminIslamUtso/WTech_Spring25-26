const unitPrice = 1000;
const days = 30;

const quantityInput = document.getElementById("quantity");
const totalPriceField = document.getElementById("totalPrice");

quantityInput.addEventListener("input", function () {

    let quantity = parseInt(quantityInput.value);

    if (isNaN(quantity)) {
        totalPriceField.value = "";
        return;
    }

    // Prevent negative value
    if (quantity < 0) {
        alert("Quantity cannot be negative!");
        quantityInput.value = 0;
        quantity = 0;
    }

    let totalPrice = unitPrice * quantity * days;

    totalPriceField.value = totalPrice;

    // Gift coupon notification
    if (totalPrice > 1000) {
        alert("Congratulations! You are eligible for a gift coupon.");
    }

});