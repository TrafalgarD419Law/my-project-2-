import {cart,updatecart} from './cart.js';
import {mainarray} from './mainarray.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryoptions} from './deliveryoption.js';

let htmlfromjs='';

cart.forEach((item)=>{
    let found;
    mainarray.forEach((product)=>{
        if (item.productName===product.content) {
              found=product;

          
          }
         
    });
    
    function updateprofile(deliveryoptionid) {
        let deliveryoption;
      
        deliveryoptions.forEach((option) => {
          if (option.id === deliveryoptionid) {
            deliveryoption = option.id;
            const deliverytime = dayjs();
            const deliverydate = deliverytime.add(option.deliveryday, 'days');
            const datestring = deliverydate.format('dddd,MMMM D');
            return datestring; 
          }
        });
      
        
        return "No delivery option found";
      }
        
        
    htmlfromjs+=`<div class="cart-item-container js-container-${found.content}">
    <div class="delivery-date">
       ${updateprofile()}
    </div>

    <div class="cart-item-details-grid">
        <img class="product-image"
        src="${found.image}">

        <div class="cart-item-details">
        <div class="product-name">
           ${found.content}
        </div>
        <div class="product-price">
           ${found.pricecents/100}
        </div>
        <div class="product-quantity">
            <span>
            Quantity: <span class="quantity-label">${item.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
            Update
            </span>
            <span data-product-name=${found.content} class="delete-quantity-link link-primary js-del">
            Delete
            </span>
        </div>
        </div>
            ${deliveryoptionshtml(found)}
        
        </div>
    </div>
    </div>`;
    
});

function deliveryoptionshtml(found){

    let html='';
    deliveryoptions.forEach(deliveryoption=>{  
    const deliverytime=dayjs();
    const deliverydate=deliverytime.add(deliveryoption.deliveryday,'days');
    const datestring=deliverydate.format('dddd,MMMM D');
    const pricestring=deliveryoption.pricecents===0?'free':`$${(deliveryoption.pricecents)/100}`
    html+=`<div class="delivery-option">
    <input type="radio"
    class="delivery-option-input"
    name="delivery-option-${found.content}">
    <div>
    <div class="delivery-option-date">
       ${datestring}
    </div>
    <div class="delivery-option-price">
        ${pricestring} - Shipping
    </div>
    </div>
</div>` 
         });
         return html;
}
document.querySelector('.jk').innerHTML=htmlfromjs;
document.querySelectorAll('.js-del').forEach((delebutton)=>{
     delebutton.addEventListener('click',()=>{
        const productName=delebutton.dataset.productName;
        updatecart(productName);
        console.log(cart);

        const container=document.querySelector(`.js-container-${productName}`);
        container.remove();
     });
});
  



