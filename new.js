let mov = 0; 
let mo = 0;
let mo1 = 0;
let up = 0;
let up1 = 0; 
let ver = 0;
let ver1 = 0;
let left = 0;
let marginTop = 0;
let topo = '-300px'
let cont = document.querySelectorAll('#div1 span');
let shift = document.querySelectorAll('#dic #div1 span'); 
  let scor = document.getElementById('score');
  document.onkeypress = function(){
  if(document.keypress = scor) {
    scor.innerHTML++;
  }else if(document.keypress != scor ){
    --scor.innerHTML;
  }
}

console.log('hello')
let click = document.getElementById('start').onclick = function move(){
  for(let i = 0; i<cont.length; i++) {
    shift[i].style.marginLeft = left + 'px';
    left+=20;
    cont[i].style.display = 'block';
    shift[i].style.color = 'white';
    function com() {
      if(cont[i] == topo){
        cont[i].style.display = 'none';
      }else if(cont[i] != topo) {
        cont[i].style.display = 'block';
      }
    }com()
  } 
  function timer(){
    var sec = document.getElementById('timer');
    sec.innerHTML++;
        if (sec.innerHTML==0){
            setTimeout(function(){},1000);
        }else if(sec.innerHTML == 30){
            sec.innerHTML = sec.innerHTML;
        }else  {
            setTimeout(timer,1000);
        }
    }
    setTimeout(timer,1000);
  window.addEventListener('keypress',myFunction);
  function myFunction (key) {

  if(key.keyCode == '65') {
      cont[0].style.display = 'none';
    } else if(key.keyCode == '66') {
      cont[1].style.display = 'none';
    } else if (key.keyCode == '68') {
      cont[2].style.display = 'none';
    } else if(key.keyCode == '67') {
      cont[3].style.display = 'none';
    }else if(key.keyCode == '70') {
      cont[4].style.display = 'none';
    }else if(key.keyCode == '89') {
      cont[5].style.display = 'none';
    }else if(key.keyCode == '79') {
      cont[6].style.display = 'none';
    }else if(key.keyCode == '81') {
      cont[7].style.display = 'none';
    }else if(key.keyCode == '74') {
      cont[8].style.display = 'none';
    }else if(key.keyCode == '76') {
      cont[9].style.display = 'none';
    }else if(key.keyCode == '77') {
      cont[10].style.display = 'none';
    }else if(key.keyCode == '88') {
      cont[11].style.display = 'none';
    }else if(key.keyCode == '83') {
      cont[12].style.display = 'none';
    }else if(key.keyCode == '90') {
      cont[13].style.display = 'none';
    }else if(key.keyCode == '86') {
      cont[14].style.display = 'none';
    }else if(key.keyCode == '72') {
      cont[15].style.display = 'none';
    }else if(key.keyCode == '80') {
      cont[16].style.display = 'none';
    }else if(key.keyCode == '82') {
      cont[17].style.display = 'none';
    }else if(key.keyCode == '85') {
      cont[18].style.display = 'none';
    }else if(key.keyCode == '73') {
      cont[19].style.display = 'none';
    }else if(key.keyCode == '84') {
      cont[20].style.display = 'none';
    }else if(key.keyCode == '71') {
      cont[21].style.display = 'none';
    }else if(key.keyCode == '87') {
      cont[22].style.display = 'none';
    }else if(key.keyCode == '69') {
      cont[23].style.display = 'none';
    }else if(key.keyCode == '75') {
      cont[24].style.display = 'none';
    }
  }
  
  
 
let   sdvig  = setInterval(function() {
    cont[1].style.marginTop = mov + '1px';
    cont[8].style.marginTop = mov + 'px';
    mov--;
  
}, 70);
 

let timerId = setTimeout(function tick() {
  cont[3].style.marginTop = mov + 'px';
  cont[2].style.marginTop = mov + 'px';
  mov--;
  timerId = setTimeout(tick, 200); 
  

},4000);

let func = setTimeout(function foo() {
  cont[10].style.marginTop = mo + 'px';
  
  cont[15].style.marginTop = mo + 'px';
  mo--;
  func = setTimeout(foo, 150);
}, 10000);

let upp = setTimeout(function upa(){
  cont[9].style.marginTop = up + 'px';
  cont[14].style.marginTop = up + 'px';
  cont[24].style.marginTop = up + '1px';
  up--;
  upp = setTimeout(upa,100);
},25000)

let veru = setTimeout(function vu(){
  cont[0].style.marginTop = ver + '1px';
  cont[21].style.marginTop = ver + 'px';
  cont[6].style.marginTop = ver + '2px';
  ver--;
  veru = setTimeout(vu,100);
},35000);

let verev = setTimeout(function tre(){
  cont[4].style.marginTop = mo1 + '1px';
  cont[20].style.marginTop = mo1 + 'px';
  cont[17].style.marginTop = mo1 + 'px';
  mo1--;
  verev = setTimeout(tre,100);
},50000);

function six () {


let verx = setTimeout(function five(){
  
  cont[5].style.marginTop = up1 + 'px';
  cont[22].style.marginTop = up1 + '1px';
  cont[7].style.marginTop = up1 + '1px';
  up1--;
 verx = setTimeout(five,200);
},1000);

}
six();

let verx1 =  setTimeout(function seven(){
  
  cont[18].style.marginTop = ver1 + '2px';
  cont[23].style.marginTop = ver1 + '1px';
  cont[19].style.marginTop = ver1 + '1px';
  ver1--;
 verx1 = setTimeout(seven,100);
},20000);

let verx2 = setTimeout(function nine(){
  
  cont[11].style.marginTop = ver1 + 'px';
  cont[13].style.marginTop = ver1 + '1px';
  cont[16].style.marginTop = ver1 + '2px';
  cont[12].style.marginTop = ver1 + '1px';
  ver1--;
 verx2 = setTimeout(nine,100);
},17000);

}



