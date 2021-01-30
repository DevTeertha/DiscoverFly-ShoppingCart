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
        var firstClassInput = document.getElementById('first-class');
        var firstClassNumber = parseFloat(firstClassInput.value);

        var economyInput = document.getElementById('economy-input');
        var economyNumber = parseFloat(economyInput.value);

        var subTotalPrice = firstClassNumber*150 + economyNumber*100;

        var subTotal = document.getElementById('subtotal');
        subTotal.innerText = subTotalPrice;
        total(subTotalPrice , vat10(subTotalPrice));
}

function vat10(vat){
    var vatCalculate = (vat*10)/100;
    document.getElementById('vat').innerText = vatCalculate;
    return vatCalculate;
}

function total(subtotal , vat){
    var totalPrice = subtotal+vat;
    document.getElementById('total').innerText = totalPrice;
}



// function handleFirstClassChange(isPlus) {
//     var firstClassInput = document.getElementById('first-class');
//     var firstClassNumber = parseFloat(firstClassInput.value);
//     let firstClassNewNumber = firstClassNumber;
//     if (isPlus == true) {
//         firstClassNewNumber = firstClassNumber + 1;
//     }
//     if (isPlus == false && firstClassNumber > 0) {
//         firstClassNewNumber = firstClassNumber - 1;
//     }
//     firstClassInput.value = firstClassNewNumber;
// }

// function handleEconomyChange(isPlus) {
//     var economyInput = document.getElementById('economy-input');
//     var economyNumber = parseFloat(economyInput.value);
//     let economyNewNumber = economyNumber;
//     if (isPlus == true) {
//         economyNewNumber = economyNumber + 1;
//     }
//     if (isPlus == false && economyNumber > 0) {
//         economyNewNumber = economyNumber - 1;
//     }
//     economyInput.value = economyNewNumber;
// }