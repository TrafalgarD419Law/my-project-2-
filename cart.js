

export let cart;
try {
    const rawData = localStorage.getItem('cart');
    console.log('Raw data from localStorage:', rawData); // Log raw data
    cart = JSON.parse(rawData) || [
        { productName: 'black-backpack-safari', quantity: 1 },
        { productName: 'mens-sunglasses-black', quantity: 2 }
    ];
} catch (error) {
    console.error('Error parsing cart from localStorage:', error);
    cart = [
        { productName: 'black-backpack-safari', quantity: 1, deliveryoptionid:1 },
        { productName: 'mens-sunglasses-black', quantity: 2 , deliveryoptionid:1}]}
 

function addtolocal(){
localStorage.setItem('cart', JSON.stringify(cart));
 }

export function add(productName){
     
    let matchingitem;
    cart.forEach(item => {
        if (productName === item.productName) {
            matchingitem = item;
        }
    });
    if (matchingitem) {
        matchingitem.quantity += 1;
    } else {
        cart.push({
            productName: productName,
            quantity: 1,
            deliveryoptionid:1
        });
    }
    addtolocal();
}

export function updatecart(productName){
    const newcart=[];
    cart.forEach((item)=>{
         if (item.productName!==productName){
            newcart.push(item);
            
         }
    });
      
      cart=newcart;
    addtolocal();
}