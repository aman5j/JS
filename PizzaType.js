function showPizzas()
{
    var i=pzt.selectedIndex
    switch(i)
    {
        case 1:
            var vg=[['-Select Pizza-',0],['MARGHERITA',15000],['DOUBLE CHEESE MARGHERITA',2100],['PEPPY PANEER',14000],['CHEESE N CORN',1200]]
            fillDD(vg)
            break
        case 2:
            var nvg=[['-Select Pizza-',0],['CHICKEN DOMINATOR',2300],['PEPPER BARBECUE & ONION',1700],['CHICKEN DOMINATOR',1399],['NON VEG SUPREME',1199]]
            fillDD(nvg)
            break
    }
}

function fillDD(arr)
{
    removeOptions()
    for(i=0;i<arr.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=arr[i][0]
        opt.value=arr[i][1]
        pz.add(opt)
    }
}

function removeOptions()
{
    for(j=pz.options.length-1;j>=0;j--)
    {
        pz.remove(j)
    }
}


function show()
{
    var pcompany="images/Pizza Hut.jpg"
    var logo="images/"+pzt.value+".png"
    var pzname=pz.options[pz.selectedIndex].text
    var pzpic="images/"+pzname+".png"
    var price=pz.value
    var Q=parseInt(qty.value)
    var dis=DiscountOffer(Q)
    var output=`<table width='30%' cellpadding='5' cellspacing='0' border='1'>`
    output+=`<tr><th><img src='${pcompany}' width='150'></th></tr>`
    output+=`<tr><th><img src='${logo}' width='15'>  ${pzname}</th></tr>`
    output+=`<tr><th><img src='${pzpic}' width='250'></th></tr></table>`
    
    output+=dis
    result.innerHTML=output

}

function DiscountOffer(qtyoffer)
{   offer=''
    if(qtyoffer==1)
    {
        d='No Discount'
        offer+=`<table width='30%' cellpadding='5' cellspacing='0' border='1'>`
        offer+=`<tr><th>Discount: ${d}</th></tr></table>`
    }
    else if(qtyoffer>=2 && qtyoffer<=5)
    {
        d='1 Pepsi'
        offer+=`<table width='30%' cellpadding='5' cellspacing='0' border='1'>`
        offer+=`<tr><th>Discount: ${d}</th></tr>`
        offer+=`<tr><th><img src='images/pepsi.png' width='100'></th></tr></table>`
    }
    else if(qtyoffer>=6 && qtyoffer<=10)
    {
        d='Frech Fries 1 Pepsi & one Choko Lava Cake'
        offer+=`<table width='30%' cellpadding='5' cellspacing='0' border='1'>`
        offer+=`<tr><th>Discount: ${d}</th></tr>`
        offer+=`<tr><th><img src='images/pepsi.png' width='100'></th></tr>`
        offer+=`<tr><th><img src='images/French Fries.png' width='100'></th></tr>`
        offer+=`<tr><th><img src='images/chocolate-lava-crunch-cake.png' width='100'></th></tr></table>`
    }
    return offer
}