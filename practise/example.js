// denne funktion er lavet for at vise endnu et eksempel på en funktion
function myPrint(antal) {
  var result='';
  
  for (var i=0; i<antal; i++) {
    console.log(i);
    
    result += 'ssss World of JavaScript!<br>';
  }
  
  return result;
}

function main() {
  /*
   * console.log() bruges til at udskrive System.out.println/Console.WriteLine
   * debug-beskeder i browseren. Det er lidt forskelligt hvordan man får console
   * at se i diverse browsere. I Chrome og Firefox kan man trykke F12 og vælge
   * 'Console'
   */
  console.log('main-start');
  
  var div = document.getElementById('output');
  
  // console.log() understøtter, at man kan udskrive elementer, så de kan inspiceres
  console.log(div);
  
  div.innerHTML = myPrint(3);
  
  console.log('main-end');
}

main();