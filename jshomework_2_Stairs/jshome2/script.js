function one(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      str += "*";
       
    }
    str += '\n';
  }
  return str;
  
}
//console.log(one())

function two(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(i === 0 || i === 6){
        str += '*'
      }else if(j === 0 || j === 6){
        str += "*"
      }else{
        str += ' '
      }  
    }
    str += '\n';
  }
  return str;
}
//console.log(two())

function three(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(i === 0){
        str += "*";
      }else if(j === 0){
        str += "*";  
      }else if(j === 6 - i){
      str += '*'
      }else{
        str += ' '
      }  
    }
    str += '\n';
  }
  return str;
  
}
//console.log(three())

function four(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(i === 6){
        str += '*'
      }else if(j === 0){
        str += '*'

      }else if(j === i){
        str += '*'
      }else{
        str += ' '
      }  
    }
    str += '\n';
  }
  return str;
  
}
//console.log(four())
function five(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(i === 6){
        str += '*'
      }else if(j === 6){
        str += '*'

      }else if(j === 6 - i){
        str += '*'
      }else{
        str += ' '
      }  
    }
    str += '\n';
  }
  return str;
  
}
//console.log(five())

function six(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(i === 0){
        str += '*'
      }else if(j === 6){
        str += '*'

      }else if(j === i){
        str += '*'
      }else{
        str += ' '
      }  
    }
    str += '\n';
  }
  return str;
  
}
//console.log(six())
function seven(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(j === i){
        str += '*'
      }else if(j === 6 - i){
        str += '*'
      }else{
        str += ' '  
  }
}
str += '\n';
}
return str;
}
//console.log(seven())
function eight(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(i === 0){
        str += '*'
      }else if(j === i && i < 4){
        str += '*'
      }else if(j === 6 - i && i < 4){
        str += '*'
      }else{
      str += ' '
      }

}
str += '\n';
  }
  return str;
}
//console.log(eight())
function nine(){
  var str = ''
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 7; j++){
      if(i === 6){
        str += '*'
      }else if(j === i && i > 2){
        str += '*'
      }else if(j === 6 - i  && i > 2){
        str += '*'
      }else{
      str += ' '
      }

}
str += '\n';
  }
  return str;
}
console.log(nine())