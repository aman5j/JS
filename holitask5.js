function call()
{
    if(animals.checked)
    {
        out=`<table width='50%' cellpadding='5' border='1'>`
        out+=`<tr><th><img src='images/animal1.png' width='250'></th>`
        out+=`<th><img src='images/animal3.png' width='250'></th>`
        out+=`<th><img src='images/animal2.png' width='250'></th>`
        out+=`<th><img src='images/animal4.png' width='250'></th>`
        out+=`<th><img src='images/animal5.png' width='250'></th></tr></table>`
    }
    else if(foods.checked)
    {
        out=`<table width='50%' cellpadding='5' border='1'>`
        out+=`<tr><th><img src='images/food1.png' width='250'></th>`
        out+=`<th><img src='images/food2.png' width='250'></th>`
        out+=`<th><img src='images/food3.png' width='250'></th>`
        out+=`<th><img src='images/food4.png' width='250'></th>`
        out+=`<th><img src='images/food5.png' width='250'></th></tr></table>`
    }
    else if(trees.checked)
    {
        out=`<table width='50%' cellpadding='5' border='1'>`
        out+=`<tr><th scope='column'><img src='images/tree1.png' width='250'></th>`
        out+=`<th scope='column'><img src='images/tree2.png' width='250'></th>`
        out+=`<th scope='column'><img src='images/tree3.png' width='250'></th>`
        out+=`<th scope='column'><img src='images/tree4.png' width='250'></th>`
        out+=`<th scope='column'><img src='images/tree5.png' width='250'></th></tr><table>`
    }
    result.innerHTML=out
}