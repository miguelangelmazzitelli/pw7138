let iconCart = document.querySelector('.boton-carrito');
let closeCart = document.querySelector('.close');
let body = document.querySelector('.body');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
