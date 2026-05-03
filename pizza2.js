function display()
{   var amount=rate.value*qty.value
    pn.innerHTML=`<h1>${pizza.value}</h2>`
    pizzapic.width=300
    pizzapic.src=`images/${pizza.value}.png`
    price.innerHTML=`Rate:${rate.value}`
    quantity.innerHTML=`Qty:${qty.value}`
    amt.innerHTML=`Amount:${amount}` 

}