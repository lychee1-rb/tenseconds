var PassSec;
function ShowPassage(){
  PassSec++;
  var msg = "ボタンを押してから" + PassSec + "秒が経ちました";
  document.getElementByID("passageArea").innerHTML = msg;
} 
 function startShowing(){
   PassSec = 0;
   PassageID = setInterval("ShowPassage()", 1000);
   document.getElementByID("startcount").disabled = true;
 }

function stopShowing(){
  clearInterval(PassageID);
  document.getElementByID("startcount").disabled = false;
}



