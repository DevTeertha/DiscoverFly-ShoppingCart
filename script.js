
document.getElementById('plusButton').addEventListener('click', function () {
    var firstClassInput = document.getElementById('first-class');
    var firstClassNumber = parseFloat(firstClassInput.value);
    var firstClassNewNumber = firstClassNumber+1;
    firstClassInput.value = firstClassNewNumber;
});

document.getElementById('minusButton').addEventListener('click',function(){
    var firstClassInput = document.getElementById('first-class');
    var firstClassNumber = parseFloat(firstClassInput.value);
    var firstClassNewNumber = firstClassNumber-1;
    firstClassInput.value = firstClassNewNumber;
});