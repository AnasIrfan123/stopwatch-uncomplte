
var hour = 0;  //by default value 0 rakhi ha 
var min = 0;
var sec = 0;
var milisec = 0;
var interval; //1 empty value ka variab bnya 

var hourHeading = document.getElementById('hour');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var miliHeading = document.getElementById('milisec');

function StartTimer(){
   milisec++
   miliHeading.innerHTML = milisec;
   if (milisec >= 100){
    sec++
    secHeading.innerHTML = sec //show krwaya ha 
    milisec = 0  //milisec 100 sy bh agy ja rha tha islye agin 0 kia
   } else if (sec >= 10){
    min++
    minHeading.innerHTML = min //show kraya ha min ko 
   sec = 0;
   } else if (min >= 3) { //by the way ye 59 k bad 1 hona chahye lakin hmne condi me 10 par kia is ko sahi krna ha
   hour++
   hourHeading.innerHTML = hour
   min = 0;
   }
}

function start(){
  interval = setInterval(StartTimer, 10); //set interval ko funct k andr rakh dia 

}
function pause(){
  clearInterval(interval);
}

function reset(){
   hour = 0; 
   min = 0;
   sec = 0;
   milisec = 0;
   hourHeading.innerHTML = hour;
   minHeading.innerHTML = min;
   secHeading.innerHTML = sec;
   miliHeading.innerHTML; milisec;
   pause() //**********reset k button par milli sec ki value empty nh ho rahi ha ******** */
}

/* styling zada nh ho vi ha  hours minutes seconds milisec ki to sb sy phly nums ko target kia ha mne id k through by defalt value 0 rakhi thi
or java sy bh 0 rakhi 1 starttimer ka funct bnaya or sb sy phly milisce ko chlate hn 100 milisec hongy to 1 sec hoga ab kia hoga milisec 0 tha to milisce ko increment ab show bh krwna ha 
phr milisec ko innerhtml = milisec or setinterval lgya realert chez render hogi 1000 milisec nh dia blke 10 dia kyun k milisec ki speed sy chalane k lye 10 dia ab mre milisec 100 ho jaye to 1 sec hoe
100 par sec me increm krwna ha to if se hamny milisec sy condi lgae or then show phir milisec ko 0 kia kyun k wo milisec k sath sec ko bh millisec speed sy incremt kr rha tha
or aysy he second par condit lage 60 sec k bad min ko increm kre or sec ko 0 kia 

us k bad btn par onclick lgya or starttimer k funct ko start function jo button ka ha us k andr rakh dia or pause ka onclick ka func bnya
or uper 1 variab bna leta hun interval ka empty valu ka or start fun k andr setInterval ko interval k brabr kr deta hun 
or pause k funct k andr interval ko clear interval sey roka set interval ko clear interval se roka
*/












//1)
// function timer(){
//    console.log('anas');
// }
// setInterval(timer, 1000)
//2)
// function timer2(){
//    console.log('run');
// }
// setTimeout(timer2, 10000)
//3)
// var count = 0; //phly count ka varib bnya value 0 rakhi
// var interval; // phir varib bnya interval ka rokna bh to ha timer func ko

// function timer(){
//    count++; //phr increment kia
//    console.log(count); // or call kia consol me 
// }
// interval = setInterval(timer, 1000) //or kitne time ki space se chalwna ha (interval varib me rakh dia setinterval ko)

// setTimeout(function (){ //phir setTimeout name sy 1 funct bnaya 
//    clearInterval(interval) //or clearInterval name sy k andr round brac me interval rakya or 
// },4000);//parathesis me 4000 value mili sec me di kitne time bad rokna ha 

