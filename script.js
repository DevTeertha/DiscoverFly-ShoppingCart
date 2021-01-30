function handleProductChange(productId, isPlus) {
    const productInput = document.getElementById(productId);
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
        setDisplay(productId, 'confirm-first-class-quantity');
        calculationDisplay('confirm-first-class-total', productTotal);
    }
    if (productId == 'economy-input') {
        productTotal = productNewNumber * 100;
        setDisplay(productId, 'confirm-economy-quantity');
        calculationDisplay('confirm-economy-total', productTotal);
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
    calculationDisplay('confirm-subtotal', subtotal);
    calculationDisplay('confirm-vat', vat);
    calculationDisplay('confirm-total', totalPrice);
}

function checkCondition(id) {
    if (document.getElementById(id).value == '' || document.getElementById(id).value == null) {
        return true;
    }
    else if(document.getElementById(id).value == '0' || document.getElementById(id).value == 0){
        return true;
    }
    else {
        return false;
    }
}

/* Output Showing */
function setDisplay(id, setValue) {
    document.getElementById(setValue).innerText = document.getElementById(id).value;
}
function calculationDisplay(id, value) {
    document.getElementById(id).innerText = '$' + value;
}
function Display() {
    if (checkCondition('fly-from') || checkCondition('fly-to') || checkCondition('departure-date') || checkCondition('return-date')){
        alert('Please Fill The All Info');
    }
    else if(checkCondition('first-class') && checkCondition('economy-input')){
        alert('Please Fill The All Info');
    }
    else {
        document.getElementById('front-display').style.display = 'none';
        document.getElementById('confirm-msg').style.display = 'block';

        setDisplay('fly-from', 'confirm-fly-from');
        setDisplay('fly-to', 'confirm-fly-to');
        setDisplay('departure-date', 'confirm-departure-date');
        setDisplay('return-date', 'confirm-return-date');
    }
}
document.getElementById('book-now-btn').addEventListener('click', Display);