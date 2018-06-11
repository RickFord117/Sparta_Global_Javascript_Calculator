
// get the user inputs

var quit = 1

while(quit == true){
  var value1 = parseFloat(prompt('enter first value'));
  var value2 = parseFloat(prompt('enter the second value'));
  var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";
  if(choice == 'a'){
    var answer = value1 + value2;
    alert(answer);
    quit = parseInt(prompt('quite calculator? 0 for yes, 1 for no'));
  }
  else if(choice == 's'){
    var answer = value1 - value2;
    alert(answer);
    quit = parseInt(prompt('quite calculator? 0 for yes, 1 for no'));
  }
  else if(choice == 'm'){
    var answer = value1 * value2;
    alert(answer);
    quit = parseInt(prompt('quite calculator? 0 for yes, 1 for no'));
  }
  else if(choice == 'd'){
    var answer = value1 / value2;
    alert(answer);
    quit = parseInt(prompt('quite calculator? 0 for yes, 1 for no'));
  }
  else if(choice == null){
    var answer = value1 + value2;
    alert(answer);
    quit = parseInt(prompt('quite calculator? 0 for yes, 1 for no'));
  }
}
