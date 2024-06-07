const incrementButton = document.querySelector('.increment-btn');
const decrementButton = document.querySelector('.decrement-btn');
const unitPrice = 400000;

let priceContainer = document.querySelector('.initial-price');
let totalPrice = document.querySelector('.total-price');
let quantityContainer = document.querySelector('.quantity');
let quantity = 0;

const updatePrice = (action) => {
  quantity = action == 'in' 
    ? ++quantity 
    : --quantity;

  if (quantity < 0) quantity = 0;
  const total = quantity * unitPrice;
  quantityContainer.innerHTML = quantity;
  totalPrice.innerHTML = total;
};