function convert(){  


 
 var hour=document.getElementById("time").value;;
  var minute=document.getElementById("min").value;;
   var second=document.getElementById("sec").value;;
   var str=document.getElementById("A/P").value;

   if (hour<12&& str=="pm"){
   var hrs=((parseInt(hour))+12); 
alert(hrs+" :"+minute+":"+second+" "+str);
   }
else if(hour==12 && str=="am"){
alert("00"+" :"+minute+":"+second+" "+str);
}
else{
alert(hour+" :"+minute+":"+second+" "+str);
}
}



