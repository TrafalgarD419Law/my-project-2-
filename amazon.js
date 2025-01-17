import {add,cart} from './cart.js';
import { mainarray} from './mainarray.js';
let all = '';
mainarray.forEach(item => {
    all += `<div class="product-container">
                <div class="product-image-container">
                    <img class="product-image" src="${item.image}">
                </div>
                <div class="product-name limit-text-to-2-lines">
                    ${item.content}
                </div>
                <div class="product-rating-container">
                    <img class="product-rating-stars" src="images/ratings/rating-${item.rating.stars * 10}.png">
                    <div class="product-rating-count link-primary">
                    ${item.rating.counts}
                    </div>
                </div>
                <div class="product-price">
                    $${(item.pricecents / 100).toFixed(2)}
                </div>
                <div class="product-quantity-container">
                    <select>
                        <option selected="" value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="product-spacer"></div>
                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>
                <button data-product-name="${item.content}" class="add-to-cart-button button-primary jss">
                    Add to Cart
                </button>
            </div>`;
});

document.querySelector('.js').innerHTML += all;



function update(){
    let cartquantity=0;
    cart.forEach((item)=>{
    cartquantity+=item.quantity;
});


  document.querySelector('.jsss')
  .innerHTML=cartquantity;
}

document.querySelectorAll('.jss').forEach((button) => {
    const productName = button.dataset.productName;
    button.addEventListener('click', () => {
        add(productName); 
        console.log(cart);
        update();
    });
});


