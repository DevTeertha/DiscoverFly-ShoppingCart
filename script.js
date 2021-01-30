function handleProductChange(productId, isPlus) {
    var productInput = document.getElementById(productId);
    var productNumber = parseFloat(productInput.value);
    let productNewNumber = productNumber;
    if (isPlus == true) {
        productNewNumber = productNumber + 1;
    }
    if (isPlus == false && productNumber > 0) {
        productNewNumber = productNumber - 1;
    }
    productInput.value = productNewNumber;

    let productTotal = 0;
    if (productId == 'first-class') {
        productTotal = productNewNumber * 150;
    }
    if (productId == 'economy-input') {
        productTotal = productNewNumber * 100;
    }
    subTotal();
}


function subTotal() {
    const firstClassNumber = getInputValue('first-class');
    const economyNumber = getInputValue('economy-input');

    var subTotalPrice = firstClassNumber * 150 + economyNumber * 100;

    var subTotal = document.getElementById('subtotal');
    subTotal.innerText = subTotalPrice;
    total(subTotalPrice, vat10(subTotalPrice));
}


function getInputValue(product) {
    var productInput = document.getElementById(product);
    var productNumber = parseFloat(productInput.value);
    return productNumber;
}


function vat10(vat) {
    var vatCalculate = (vat * 10) / 100;
    document.getElementById('vat').innerText = vatCalculate;
    return vatCalculate;
}


function total(subtotal, vat) {
    var totalPrice = subtotal + vat;
    document.getElementById('total').innerText = totalPrice;
}