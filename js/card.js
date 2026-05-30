document.addEventListener('DOMContentLoaded', () => {
    function loadCart() {
        const savedCart = getJsonCookies('cart');
        if (savedCart != null) {
            cart = savedCart;
            console.log(cart);
        }
    }

    

}