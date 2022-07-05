const originalPrice = 120
const discount = 18


function calculatePriceWithDiscount (price, discount) {
    const percentagePriceWithDiscount = 100 - discount
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100
    return priceWithDiscount
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value
    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue)

    const result = document.getElementById("result")

    result.innerText = "Your price is: $" + priceWithDiscount
}



// console.log({
//     originalPrice,
//     discount,
//     percentagePriceWithDiscount,
//     priceWithDiscount
// })