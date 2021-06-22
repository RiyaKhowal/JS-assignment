function Convertible()
{
 var   str1=document.getElementById("S1").value;
 var   str2=document.getElementById("S2").value;
  var  k=(document.getElementById("integer").value);
 
    // Case A (i)
    if ((str1.length + str2.length) < (k)){
        alert(true);}
 
    // finding common length of both string
    var commonLength = 0;
    for (var i = 0; i < Math.min(str1.length,
                           str2.length); i++) {
        if (str1[i] == str2[i])
            commonLength++;
        else
            break;
    }
 
    // Case A (ii)-
    if (((k) - str1.length - str2.length +
                     2 * commonLength) % 2 == 0)
                     alert(true);
 
    // Case B-
    alert(false);
}

