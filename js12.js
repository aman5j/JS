function fillCity()
{
    var i=states.selectedIndex
    switch(i)
    {
        case 1:
            var mpcity=['-Select City-','Gwalior','Indore','Bhopal','Jabalpur']
            fillDD(mpcity)
            break
        case 2:
            var upcity=['-Select City-','Jhansi','Agra','Kanpur','Lucknow']
            fillDD(upcity)
            break
        case 3:
            var bcity=['-Select City-','Patna','Gaya','Rajgir','Bhagalpur']
            fillDD(bcity)
            break
        case 4:
            var hcity=['-Select City-','Gurgaon','Faridabad','Panipat','Karnal']
            fillDD(hcity)
            break
            
    }
}

function fillDD(cityArray)
{
    removeOptions()
    for (i=0;i<cityArray.length;i++)
    {
                var opt=document.createElement('option')
                opt.text=cityArray[i]
                city.add(opt)
    }
}

function removeOptions()
{
    for(j=city.options.length;j>=0;j--)
    {
        city.remove(j)
    }
}

function showMap()
{
    cityMap.src=`images/${city.value}.png`
}