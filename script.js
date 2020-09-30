var days1=document.getElementById('days');
var hours1=document.getElementById('hours');
var mins1=document.getElementById('mins');
var seconds1=document.getElementById('seconds');


var newyear="1 Jan 2021";

function countDown()
{
	//create 2 vars one for starting date and other for ending date
	var startday=new Date();
	var lastday=new Date(newyear);

	//creating time vars
	var tot_seconds=(lastday-startday)/1000;
	var days=Math.floor(tot_seconds/3600/24);
	var hours=Math.floor(tot_seconds/3600)%24;
	var mins=Math.floor(tot_seconds/60)%60;
	var seconds=Math.floor(tot_seconds%60);

	// console.log(days,hours,mins,seconds); 

	days1.innerHTML=days;
	hours1.innerHTML=hours;
	mins1.innerHTML=mins;
	seconds1.innerHTML=seconds;

}

countDown();

//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
setInterval(countDown,1000);
