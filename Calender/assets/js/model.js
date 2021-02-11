var dateCount=0;
var dateOfMonthsArr=[31,28.29,31,30,31,30,31,31,30,31,30,31];
var monthsNameArr=["January","February","March","April","May","June","July","August","September","October","November","December"];
var monthIndex=[1,2,3,4,5,6,7,8,9,10,11,12];
var daysArr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var daysIndexArr=[0,1,2,3,4,5,6];
var active_month;
var active_year;
var monthCounter=0;
//handling leap year 
function leapYear(year,month){
    return new Date(year,month,0).getDate();
}
function setActiveMonth_Year(year,month){
    active_year=year;
    active_month=month;
}
function getActiveMonth_Year(){
    return new Date(active_year,active_month);
}
function showDate(){
    var shftDate="";
    var currentDate=new Date()
    var thisMonth=new Date(currentDate.getFullYear(),currentDate.getMonth(),1);
    monthCounter=thisMonth.getMonth();
    console.log("monthCounter in showDate is :"+monthCounter);
    setActiveMonth_Year(thisMonth.getFullYear(),thisMonth.getMonth());
    var shftDate="";
    var currMonthName=monthsNameArr[thisMonth.getMonth()];
    document.getElementById("dispCurrentTime").innerText=currentDate.getDate()+"/"+monthIndex[currentDate.getMonth()]+"/"+currentDate.getFullYear();
    document.getElementById("currentMonth").innerText=currMonthName;

    console.log("currentdate day index is:"+currentDate.getDay());

    for(var i=0;i< thisMonth.getDay();i++){
        shftDate+="<div class="+"dateTab"+"></div>";
    }
    document.getElementById("dateIndex").innerHTML=shftDate;
    var noOfDays=leapYear(thisMonth.getFullYear(),thisMonth.getMonth()+1);
    for(var i=0;i<noOfDays;i++){
        ++dateCount;
        if(dateCount===currentDate.getDate()){
             document.getElementById("dateIndex").innerHTML+=
                "<div class="+"dateTab"+" style="+"color:#8c1b3d;font-size:20px;text-shadow: 2px 2px 10px #85797c;"+">"+
                        (dateCount)+"</div>";
        }else{
            document.getElementById("dateIndex").innerHTML+=
                "<div class="+"dateTab"+">"+(dateCount)+"</div>";
        }
    }
}


function nextMonth(){
    dateCount=0;
    var shftDate="";
    var tempMonth2=getActiveMonth_Year();
    var nextMonth=new Date(tempMonth2.getFullYear(),tempMonth2.getMonth()+1,1);
    monthCounter=nextMonth.getMonth();
    console.log("monthCounter in nextMonth is :"+monthCounter);
    var monthName=monthsNameArr[nextMonth.getMonth()];
    document.getElementById("dispCurrentTime").innerText=new Date().getDate()+"/"+monthIndex[new Date().getMonth()]+"/"+new Date().getFullYear();
    document.getElementById("currentMonth").innerText=monthName;

    for(var i=0;i< nextMonth.getDay();i++){
        shftDate+="<div class="+"dateTab"+"></div>";
    }
    document.getElementById("dateIndex").innerHTML=shftDate;
    var noOfDays=leapYear(nextMonth.getFullYear(),nextMonth.getMonth()+1);
    for(var i=0;i<noOfDays;i++){
        
        document.getElementById("dateIndex").innerHTML+=
            "<div class="+"dateTab"+">"+(++dateCount)+"</div>";
    }

    if(monthCounter>=0 && monthCounter<11){
         setActiveMonth_Year(nextMonth.getFullYear(),nextMonth.getMonth());
    }
    if(monthCounter===11){
        setActiveMonth_Year(nextMonth.getFullYear()+1,-1);
        monthCounter=0;
    }
}

function prevMonth(){
    console.log("prevmonth calling")
    dateCount=0;
    var shftDate="";
    var tempMonth3=getActiveMonth_Year();
    var prevMonth=new Date(tempMonth3.getFullYear(),tempMonth3.getMonth()-1,1);
    console.log("prevMonth is:"+prevMonth);
    var monthName=monthsNameArr[prevMonth.getMonth()];
    document.getElementById("dispCurrentTime").innerText=new Date().getDate()+"/"+monthIndex[new Date().getMonth()]+"/"+new Date().getFullYear();
    document.getElementById("currentMonth").innerText=monthName;

    for(var i=0;i< prevMonth.getDay();i++){
        shftDate+="<div class="+"dateTab"+"></div>";
    }
    document.getElementById("dateIndex").innerHTML=shftDate;
    var noOfDays=leapYear(prevMonth.getFullYear(),prevMonth.getMonth()+1);
    for(var i=0;i<noOfDays;i++){
        
        document.getElementById("dateIndex").innerHTML+=
            "<div class="+"dateTab"+">"+(++dateCount)+"</div>";
    }
    if(monthCounter>=0 && monthCounter<11){
        setActiveMonth_Year(prevMonth.getFullYear(),prevMonth.getMonth());
   }
   if(monthCounter===-1){
       setActiveMonth_Year(prevMonth.getFullYear()-1,12);
       monthCounter=active_month;
   }
}


