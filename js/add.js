const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantityInput = document.querySelector('.number-add');

decreaseBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 0) {
      value--;
    }
    quantityInput.value = value;
})

increaseBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    value++;
    quantityInput.value = value; 
})