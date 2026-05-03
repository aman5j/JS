function display()
{

    var r=rollno.value
    var sn=sname.value
    var gen=gender.value
    var fn=fname.value
    var schooln=schoolname.value
    var h=hindi.value
    var e=english.value
    var p=physics.value
    var c=chemistry.value
    var m=math.value
    var hrem=rem(h)
    var erem=rem(e)
    var prem=rem(p)
    var crem=rem(c)
    var mrem=rem(m)
    
    var logopic="images/MPBoardLogo.png"
    var pre=''
    var bet=''
    if(gen=='Female')
    {
        pre='Miss'
        bet='d/o'
    }
    else{
        pre='Master'
        bet='s/o'
    }


    var output=`<table width="68%" border='1'>`
    output+=`<tr><th><img src='${logopic}' width='50'></th><th>Madhya Pradesh Board of Secondary Education</th></tr`

    output+=`<table width="68%">`
    output+=`<tr><td><b>Roll No:</b></td><td>${r}</td></tr>`
    output+=`<tr><td><b>Student Name:</b></td><td>${pre} ${sn} ${bet} ${fn}</td></tr>`
    output+=`<tr><td><b>School Name:</b></td><td>${schooln}</td></tr>`

    output+=`<table table-bordered width="68%" cellpadding='5' border='1'>`
    output+=`<tr><th>Code</th><th>Name</th><th>Min</th><th>Max</th><th>Obtain</th><th>Remark</th></tr>`
    output+=`<tr><td>101</td><td>Hindi</td><td>35</td><td>100</td><td>${h}</td><td>${hrem}</td></td>`
    output+=`<tr><td>102</td><td>English</td><td>35</td><td>100</td><td>${e}</td><td>${erem}</td></td>`
    output+=`<tr><td>103</td><td>Physics</td><td>35</td><td>100</td><td>${p}</td><td>${prem}</td></td>`
    output+=`<tr><td>104</td><td>Chemistry</td><td>35</td><td>100</td><td>${c}</td><td>${crem}</td></td>`
    output+=`<tr><td>105</td><td>Math</td><td>35</td><td>100</td><td>${m}</td><td>${mrem}</td></td>`
    
    result.innerHTML=output

    

}

function rem(marks)
{   remd=``
    if(marks>=75 && marks<=100)
    {remd="D"}
    else if
    (marks>=0 && marks<=35)
    {remd=`<font color='red'>*</font>`}
    return remd
}