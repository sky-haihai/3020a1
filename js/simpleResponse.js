function addToCartBtnHandler(){
    alert('cart function is not yet implemented');
}

function navigationBtnHandler(){
    alert('target page does not exist yet')
    return false;
}

const elements=document.getElementsByClassName('nav');

for (const el of elements) {
    el.addEventListener('click',navigationBtnHandler);
}
