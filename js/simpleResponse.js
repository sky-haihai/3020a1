function addToCartBtnHandler(){
    alert('cart function is not yet implemented');
}

function navigationBtnHandler(){
    alert('target page does not exist yet')
    return false;
}

let navBar=document.getElementsByName('nav-tab');
navBar.forEach(element => {
    element.addEventListener('click',navigationBtnHandler);
});