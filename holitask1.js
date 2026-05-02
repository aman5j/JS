function showDiscount()
{   a=amt.value
    if(d1.checked)
    {
        var dis=a*d1.value/100
        var na=a-dis 
    }
    else if(d2.checked)
    {
        var dis=a*d2.value/100
        var na=a-dis
    }
    else if(d3.checked)
    {
        var dis=a*d3.value/100
        var na=a-dis
    }
    result.innerHTML=`Discount:${dis}<br>Net Amount:${na}`
}