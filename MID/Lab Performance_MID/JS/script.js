var unitPrice = 1000;
var days = 30;

var quantityInput = document.getElementById("quantity");
var totalPriceField = document.getElementById("totalPrice");
var errorMsg = document.getElementById("error-msg");

quantityInput.addEventListener("input", function() {
    calculatePrice();
});

function calculatePrice() {

    var quantity = parseFloat(quantityInput.value);

    if (quantity < 0) {
        quantityInput.value = 0;
        quantity = 0;
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
    }

    if (quantityInput.value === "" || isNaN(quantity)) {
        totalPriceField.value = "";
        return;
    }

    var totalPrice = unitPrice * quantity * days;

    totalPriceField.value = totalPrice + " BDT";

    if (totalPrice > 1000) {
        alert("Congratulations! You are eligible for a Gift Coupon!");
    }
}